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

  // Add file to the list
  addFile(file, id) {
    // TODO: Implement
  }

  // Update file progress
  updateProgress(id, progress) {
    // TODO: Implement
  }

  // Show conversion complete
  markComplete(id, convertedFile) {
    // TODO: Implement
  }
}
