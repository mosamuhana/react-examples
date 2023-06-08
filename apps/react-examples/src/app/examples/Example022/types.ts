export interface IContact {
  id: number;
  name: string;
  email: string;
}

export type OnChange<T> = (value: T) => void;
