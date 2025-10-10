/**
 * Component Tagger Loader
 * 
 * A webpack/turbopack loader that adds data attributes to components
 * for visual editing capabilities (e.g., CMS preview mode)
 */

module.exports = function componentTaggerLoader(source) {
  // Only process in development or when explicitly enabled
  const isEnabled = process.env.ENABLE_VISUAL_EDITS === 'true' || process.env.NODE_ENV === 'development';
  
  if (!isEnabled) {
    return source;
  }

  // Get the resource path (file path)
  const resourcePath = this.resourcePath || '';
  
  // Skip processing for node_modules and certain directories
  if (
    resourcePath.includes('node_modules') ||
    resourcePath.includes('.next') ||
    resourcePath.includes('visual-edits')
  ) {
    return source;
  }

  // Basic tagging - adds data-component attribute to exported components
  // This is a simple implementation that can be extended based on needs
  
  // For more sophisticated tagging, you would parse the AST and inject
  // data attributes into JSX elements. For now, we'll just pass through.
  
  return source;
};

