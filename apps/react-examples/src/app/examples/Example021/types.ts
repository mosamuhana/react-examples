export interface IFood {
  id: number;
  name: string;
  description: string;
}

export type OnChange<T> = (value: T) => void;
