export const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export const range = (length: number, start: number = 0) => Array.from({ length }, (_, index) => start + index);

export const exampleName = (index: number) => 'Example' + index.toString().padStart(3, '0');

export const exampleNumber = (index: number) => index.toString().padStart(3, '0');

export const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

/*
Number.prototype.clamp = function(min: number, max: number) {
  return clamp(this, min, max);
}
*/
