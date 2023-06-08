export interface ITask {
  id: number;
  text: string;
  done: boolean;
}

export type OnChange<T> = (value: T) => void;
