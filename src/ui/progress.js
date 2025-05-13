// Progress bar and status utilities for HEICscape
// - Render progress bars for each file
// - Update status messages

export function setProgress(element, value) {
	element.value = value;
}

export function setStatus(element, message) {
	element.textContent = message;
}
