// BatchConverter class for handling multiple HEIC file conversions
// This converter needs to handle:
// - Large batches (100+ files)
// - Memory constraints in browser
// - Progress reporting for each file
// - Graceful error recovery
// - Multiple output formats (JPEG, PNG, WebP)
// - Download as ZIP
// - Async/await and modern ES6+ syntax

import heic2any from 'heic2any';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export class BatchConverter {
	/**
	 * @param {Object} options - Configuration options
	 * @param {string[]} [options.outputFormats] - Supported output formats
	 * @param {number} [options.maxBatchSize] - Maximum number of files per batch
	 */
	constructor(options = {}) {
		this.outputFormats = options.outputFormats || ['image/jpeg', 'image/png', 'image/webp'];
		this.maxBatchSize = options.maxBatchSize || 100;
		this.queue = [];
		this.results = [];
		this.errors = [];
	}

	/**
	 * Add files to the conversion queue
	 * @param {File[]} files
	 */
	addFiles(files) {
		// Validate file types and batch size
		const validFiles = Array.from(files).filter(file => file.type === 'image/heic');
		if (this.queue.length + validFiles.length > this.maxBatchSize) {
			throw new Error('Batch size exceeds limit');
		}
		this.queue.push(...validFiles);
	}

	/**
	 * Process all files in the queue using Web Workers
	 * @param {Object} options
	 * @param {string} options.format - Output format
	 * @param {number} options.quality - Output quality
	 * @param {Function} onProgress - Progress callback
	 */
	async processAll(options = {}, onProgress) {
		const results = [];
		let completed = 0;
		for (const [i, file] of this.queue.entries()) {
			const id = `${file.name}-${i}`;
			const worker = new Worker('/src/converter/worker.js', { type: 'module' });
			results.push(new Promise((resolve) => {
				worker.onmessage = (e) => {
					if (e.data.status === 'success') {
						this.results.push(e.data.result);
						if (onProgress) onProgress(id, 100);
						resolve(e.data.result);
					} else {
						this.errors.push({ id, error: e.data.error });
						if (onProgress) onProgress(id, 0);
						resolve(null);
					}
					worker.terminate();
				};
				worker.postMessage({ file, options, id });
			}));
		}
		await Promise.all(results);
	}

	/**
	 * Convert a single file (for direct use)
	 */
	async convertFile(file, options = {}) {
		return new Promise((resolve, reject) => {
			const worker = new Worker('/src/converter/worker.js', { type: 'module' });
			worker.onmessage = (e) => {
				if (e.data.status === 'success') {
					resolve(e.data.result);
				} else {
					reject(new Error(e.data.error));
				}
				worker.terminate();
			};
			worker.postMessage({ file, options, id: file.name });
		});
	}

	/**
	 * Download all converted files as a ZIP
	 */
	async downloadAsZip() {
		const zip = new JSZip();
		this.results.forEach((blob, i) => {
			zip.file(`converted-${i + 1}.jpg`, blob);
		});
		const content = await zip.generateAsync({ type: 'blob' });
		saveAs(content, 'converted-files.zip');
	}
}
