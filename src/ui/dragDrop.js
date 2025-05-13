// Drag-drop handler for HEICscape
// - Visual feedback during drag
// - Validates file types
// - Handles multiple file selection
// - Provides error messages for invalid files

export function initDragDrop(element, onFilesSelected) {
	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	element.addEventListener('dragover', preventDefaults);
	element.addEventListener('dragenter', preventDefaults);
	element.addEventListener('dragleave', preventDefaults);
	element.addEventListener('drop', (e) => {
		preventDefaults(e);
		const files = Array.from(e.dataTransfer.files).filter(f => f.type === 'image/heic');
		if (files.length === 0) {
			alert('Please drop valid HEIC files.');
			return;
		}
		onFilesSelected(files);
	});
}
