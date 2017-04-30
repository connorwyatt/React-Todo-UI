import React, {StatelessComponent} from 'react';
import {ITodo} from '../data/reducers/todos';

interface IProps {
  todos: Array<ITodo>;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TodoList: StatelessComponent<IProps> = ({todos, onRemove, onToggle}) => {
  return <ul>
    {
      todos.map((todo) => {
        return <li key={todo.id}>
          <button onClick={() => onToggle(todo.id)}>{todo.isComplete ? 'Y' : 'N'}</button>
          &nbsp;{todo.text}&nbsp;
          <button onClick={() => onRemove(todo.id)}>X</button>
        </li>;
      })
    }
  </ul>;
};
