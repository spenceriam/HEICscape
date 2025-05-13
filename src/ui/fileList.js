// File list component for HEICscape
// - Shows all selected files with thumbnails
// - Displays conversion progress for each file
// - Allows removing files from the queue
// - Shows file size and conversion status

export class FileListManager {
	constructor(container) {
		this.container = container;
		this.files = new Map();
	}

	addFile(file, id) {
		const item = document.createElement('div');
		item.className = 'file-item flex items-center gap-2 p-2 border-b';
		item.innerHTML = `
			<img src="" alt="thumb" class="w-8 h-8 bg-gray-200" />
			<span>${file.name}</span>
			<span class="text-xs text-gray-500">${(file.size/1024).toFixed(1)} KB</span>
			<progress value="0" max="100"></progress>
			<button class="remove-btn text-red-500 ml-auto">Remove</button>
		`;
		item.querySelector('.remove-btn').onclick = () => {
			item.remove();
			this.files.delete(id);
		};
		this.container.appendChild(item);
		this.files.set(id, { file, item });
	}

	updateProgress(id, progress) {
		const entry = this.files.get(id);
		if (entry) {
			const progressEl = entry.item.querySelector('progress');
			if (progressEl) progressEl.value = progress;
		}
	}

	markComplete(id, convertedFile) {
		const entry = this.files.get(id);
		if (entry) {
			entry.item.classList.add('bg-green-50');
		}
	}
}
