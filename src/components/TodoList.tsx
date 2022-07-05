import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import todoListState from '../atom/todoList';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
