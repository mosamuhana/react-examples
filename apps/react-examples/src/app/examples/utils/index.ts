export const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export const range = (length: number, start: number = 0) => Array.from({ length }, (_, index) => start + index);

export const exampleName = (index: number) => 'Example' + index.toString().padStart(3, '0');

export const exampleNumber = (index: number) => index.toString().padStart(3, '0');

export function getImageUrl(imageId: string, size: string = 's') {
  return `https://i.imgur.com/${imageId}${size}.jpg`;
}
