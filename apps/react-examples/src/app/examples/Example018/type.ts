export type OnChange<T> = (value: T) => void;

export interface ITodo {
  id: number;
  title: string;
  done: boolean;
}
