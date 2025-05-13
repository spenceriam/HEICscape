# HEICscape Development TODO

## 1. Context Building
- [ ] Write detailed comments for intent and requirements in code (see build.md context)
- [ ] Define supported input/output formats and batch size limits
- [ ] Document memory and performance constraints

## 2. Project Scaffolding
- [x] Initialize Vite project (vanilla JS)
- [x] Install dependencies: heic2any, jszip, file-saver, tailwindcss, postcss, autoprefixer
- [x] Set up file structure:
  - [x] index.html
  - [x] src/main.js
  - [x] src/converter/{converter.js, worker.js, utils.js}
  - [x] src/ui/{dragDrop.js, fileList.js, progress.js}
  - [x] src/styles/main.css
  - [x] public/{manifest.json, sw.js}

## 3. Core Features
- [ ] BatchConverter class for multiple HEIC file conversions
- [ ] Web Worker for parallel processing and progress reporting
- [ ] UI: drag-drop, file list, progress, error messages
- [ ] Download as ZIP
- [ ] Support for JPEG, PNG, WebP output

## 4. Error Handling & Recovery
- [ ] Graceful error handling in main thread and worker
- [ ] User-friendly error messages
- [ ] Retry logic for failed conversions

## 5. Performance & Monitoring
- [ ] Track conversion time, memory usage, worker utilization
- [ ] Optimize for large batches (100+ files)

## 6. Testing
- [ ] Write tests for BatchConverter (validation, conversion, error handling)
- [ ] Test UI components

## 7. Styling & Accessibility
- [ ] Tailwind CSS setup (dark mode, responsive, accessible)
- [ ] ARIA labels and keyboard navigation

## 8. Deployment
- [ ] Vercel/Netlify deployment config
- [ ] PWA manifest and service worker

## 9. Final Polish
- [ ] Analytics (privacy-friendly)
- [ ] Launch checklist
