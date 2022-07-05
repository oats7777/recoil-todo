import React, { FC, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import todoListState, { ITodoListState } from '../atom/todoList';
import { replaceItemAtIndex, removeItemAtIndex } from '../utils/array';

interface ITodoItemProps {
  item: ITodoListState;
}

const TodoItem: FC<ITodoItemProps> = ({ item }: ITodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((todo) => todo.id === item.id);

  const editItemText = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
