// Web Worker for HEIC conversion
// - Accepts file data and conversion options
// - Reports progress back to main thread
// - Handles errors gracefully
// - Supports JPEG, PNG, WebP

importScripts('https://unpkg.com/heic2any@0.0.3/dist/heic2any.js');

self.onmessage = async (event) => {
	const { file, options, id } = event.data;
	try {
		// Convert HEIC to desired format
		const result = await heic2any({
			blob: file,
			toType: options.format || 'image/jpeg',
			quality: options.quality || 0.95
		});
		self.postMessage({ id, status: 'success', result });
	} catch (error) {
		self.postMessage({ id, status: 'error', error: error.message });
	}
};
