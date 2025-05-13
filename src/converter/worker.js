// Web Worker for HEIC conversion
// Accepts file data and conversion options
// Reports progress back to main thread
// Handles errors gracefully
// Supports multiple file formats (JPEG, PNG, WebP)

// importScripts('https://unpkg.com/heic2any@0.0.3/dist/heic2any.js');

self.onmessage = async (event) => {
  const { file, options, id } = event.data;
  try {
    // TODO: Implement conversion logic with progress reporting
    // Post progress updates using self.postMessage({ id, progress })
  } catch (error) {
    // TODO: Handle conversion errors and report back to main thread
    // self.postMessage({ id, error: error.message })
  }
};
