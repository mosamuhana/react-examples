export interface ITask {
  id: number;
  text: string;
  done: boolean;
}

export type State = ITask[];

export type Action =
  | { type: 'add'; payload: string }
  | { type: 'change'; payload: ITask }
  | { type: 'remove'; payload: number };
