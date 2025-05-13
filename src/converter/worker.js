// Web Worker for HEIC conversion
// - Accepts file data and conversion options
// - Reports progress back to main thread
// - Handles errors gracefully
// - Supports JPEG, PNG, WebP

importScripts('https://unpkg.com/heic2any@0.0.3/dist/heic2any.js');

self.onmessage = async (event) => {
	const { file, options, id, retry = 0 } = event.data;
	try {
		// Convert HEIC to desired format
		const result = await heic2any({
			blob: file,
			toType: options.format || 'image/jpeg',
			quality: options.quality || 0.95
		});
		self.postMessage({ id, status: 'success', result });
	} catch (error) {
		if (retry < 2) {
			// Retry up to 2 times
			self.postMessage({ id, status: 'retry', retry: retry + 1, error: 'Temporary error, retrying...' });
		} else {
			self.postMessage({ id, status: 'error', error: 'Conversion failed: ' + (error.message || 'Unknown error') });
		}
	}
};
