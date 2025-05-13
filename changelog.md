# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to the versioning scheme described above.

## [Unreleased]
### Added
- Initial stubs for converter, UI, and utility modules
- PWA manifest and service worker
- Tailwind CSS base file
- File structure for src/converter, src/ui, src/styles, public
- Initial implementation of BatchConverter class with intent comments and validation logic

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