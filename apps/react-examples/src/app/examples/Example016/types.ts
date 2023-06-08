export interface Position {
  x: number;
  y: number;
}

export type Change<T> = (value: T) => void;
