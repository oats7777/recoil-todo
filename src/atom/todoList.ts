import { atom } from 'recoil';

export interface ITodoListState {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<ITodoListState[]>({
  key: 'todoListState',
  default: [],
});
