"use client";

import React, { useEffect, useRef } from "react";

export const BackgroundRipple = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < 5; i++) {
        const radius = 100 + i * 100 + Math.sin(time + i) * 50;
        const opacity = 0.06 - i * 0.01;

        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          radius - 50,
          centerX,
          centerY,
          radius + 50
        );

        gradient.addColorStop(0, `rgba(247, 147, 30, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(163, 87, 9, ${opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(26, 17, 10, 0)");

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};