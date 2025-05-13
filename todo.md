# HEICscape Development TODO

## 1. Project Scaffolding
- [x] Initialize Vite project (vanilla JS)
- [x] Install dependencies: heic2any, jszip, file-saver, tailwindcss, postcss, autoprefixer
- [x] Set up file structure:
  - [x] index.html
  - [x] src/main.js
  - [x] src/converter/{converter.js, worker.js, utils.js}
  - [x] src/ui/{dragDrop.js, fileList.js, progress.js}
  - [x] src/styles/main.css
  - [x] public/{manifest.json, sw.js}

## 2. Core Features
- [x] BatchConverter class for multiple HEIC file conversions
- [x] Web Worker for parallel processing and progress reporting
- [x] UI: drag-drop, file list, progress, error messages
- [x] Download as ZIP
- [x] Support for JPEG, PNG, WebP output

## 3. Error Handling & Recovery
- [x] Graceful error handling in main thread and worker
- [x] User-friendly error messages
- [x] Retry logic for failed conversions

## 4. Performance & Monitoring
- [x] Track conversion time, memory usage, worker utilization
- [x] Optimize for large batches (100+ files)

## 5. Testing
- [ ] Write tests for BatchConverter (validation, conversion, error handling)
- [ ] Test UI components

## 6. Styling & Accessibility
- [x] Tailwind CSS setup (dark mode, responsive, accessible)
- [x] ARIA labels and keyboard navigation

## 7. Deployment
- [ ] Vercel/Netlify deployment config
- [ ] PWA manifest and service worker

## 8. Final Polish
- [ ] Analytics (privacy-friendly)
- [ ] Launch checklist
