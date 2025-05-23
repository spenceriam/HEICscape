# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to the versioning scheme described above.

## [0.1.1] - 2025-05-13
### Fixed
- Resolved Tailwind CSS v4 compatibility issues by:
  - Disabling problematic color utilities in Tailwind configuration
  - Implementing fallback CSS with tailwind-override.css
  - Simplified main.css to avoid @apply directives causing errors
  - Updated HTML to use standard CSS classes instead of custom Tailwind utility classes
  - Fixed configuration to work properly with @tailwindcss/postcss plugin

## [0.1.0] - 2025-05-13
### Added
- Project initialized
- Added README, build plan, and changelog
- Outlined development phases and requirements
- Project scaffolding and planning
- Context-building for batch HEIC conversion, memory constraints, progress reporting, error recovery, and multiple output formats
- Vite project initialized (vanilla JS)
- Dependencies installed: heic2any, jszip, file-saver, tailwindcss, postcss, autoprefixer
- index.html, src/main.js, src/converter/{converter.js, worker.js, utils.js}, src/ui/{dragDrop.js, fileList.js, progress.js}, src/styles/main.css, public/{manifest.json, sw.js} created
- Initial stubs for converter, UI, and utility modules
- PWA manifest and service worker
- Tailwind CSS base file
- File structure for src/converter, src/ui, src/styles, public
- Initial implementation of BatchConverter class with intent comments and validation logic
- Web Worker for parallel HEIC conversion and progress reporting
- UI components: drag-drop, file list, progress bar, error messages
- Download as ZIP functionality
- Support for JPEG, PNG, WebP output formats
- Graceful error handling in main thread and worker
- User-friendly error messages and retry logic for failed conversions
- Performance monitoring: track conversion time, memory usage, worker utilization
- Optimized for large batches (100+ files)
- Tailwind CSS dark mode, responsive, and accessible styles
- ARIA labels and keyboard navigation for accessibility