import { atom } from 'recoil';

export interface ITodoListState {
  id: number;
  text: string;
  isComplete: boolean;
}

const todoListState = atom<ITodoListState[]>({
  key: 'todoListState',
  default: [],
});

export default todoListState;
