"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * VisualEditsMessenger - Facilitates communication between the app and parent window
 * for visual editing capabilities (e.g., CMS preview mode)
 */
function VisualEditsMessengerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if we're running in an iframe
    const isInIframe = window.self !== window.top;

    if (!isInIframe) {
      return;
    }

    // Send initial load message
    const sendMessage = (type: string, data: any) => {
      if (window.parent) {
        window.parent.postMessage(
          {
            type,
            data,
            timestamp: Date.now(),
          },
          "*" // In production, specify exact origin
        );
      }
    };

    // Send page ready message
    sendMessage("VISUAL_EDIT_READY", {
      pathname,
      search: searchParams?.toString() || "",
      url: window.location.href,
    });

    // Listen for messages from parent
    const handleMessage = (event: MessageEvent) => {
      // In production, validate event.origin
      
      if (event.data.type === "REFRESH_CONTENT") {
        // Trigger a content refresh
        window.location.reload();
      }

      if (event.data.type === "NAVIGATE") {
        // Navigate to a new route
        const { path } = event.data.data;
        if (path) {
          window.location.href = path;
        }
      }

      if (event.data.type === "HIGHLIGHT_ELEMENT") {
        // Highlight a specific element for editing
        const { selector } = event.data.data;
        if (selector) {
          const element = document.querySelector(selector);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            // Add highlight effect
            element.classList.add("visual-edit-highlight");
            setTimeout(() => {
              element.classList.remove("visual-edit-highlight");
            }, 2000);
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [pathname, searchParams]);

  // Inject styles for visual editing highlights
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isInIframe = window.self !== window.top;
    if (!isInIframe) return;

    const style = document.createElement("style");
    style.innerHTML = `
      .visual-edit-highlight {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
        animation: pulse-highlight 0.5s ease-in-out;
      }

      @keyframes pulse-highlight {
        0%, 100% { outline-color: #3b82f6; }
        50% { outline-color: #60a5fa; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}

export default function VisualEditsMessenger() {
  return (
    <Suspense fallback={null}>
      <VisualEditsMessengerInner />
    </Suspense>
  );
}

