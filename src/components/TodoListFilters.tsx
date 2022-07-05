import React, { FC, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import {
  todoListFilterState,
  TodoListFilterStateType,
} from '../atom/todoListFilter';

const TodoListFilters: FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as TodoListFilterStateType);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
