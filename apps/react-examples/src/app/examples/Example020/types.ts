export interface ILetter {
  id: number;
  subject: string;
  isStarred: boolean;
}

export type OnChange<T> = (value: T) => void;
