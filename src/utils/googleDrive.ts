export function googleDrivePreviewUrl(fileId: string): string {
	const id = fileId.trim();
	return `https://drive.google.com/file/d/${id}/preview`;
}

export function googleDriveThumbnailUrl(fileId: string, width = 640): string {
	const id = fileId.trim();
	return `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w${width}`;
}

export function googleDriveDownloadUrl(fileId: string): string {
	const id = fileId.trim();
	return `https://drive.google.com/uc?export=download&id=${encodeURIComponent(id)}&confirm=t`;
}
