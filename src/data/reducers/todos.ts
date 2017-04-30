import {Reducer} from 'redux';
import {IAction} from '../actions/IAction';
import {IAddTodoPayload, IRemoveTodoPayload, IToggleTodoPayload, TodosActionTypes} from '../actions/todos';

export interface ITodo {
  id: number;
  text: string;
  isComplete: boolean;
}

export type ITodosState = Array<ITodo>;

export const todosReducer: Reducer<ITodosState> =
  (state: ITodosState = [], action: IAction<IAddTodoPayload|IRemoveTodoPayload|IToggleTodoPayload>): ITodosState => {
    if (!reducerMap.has(action.type)) {
      return state;
    }

    return (reducerMap.get(action.type) as Reducer<ITodosState>)(state, action);
  };

const addTodo = (state: ITodosState, action: IAction<IAddTodoPayload>): ITodosState => {
  return [...state, action.payload.todo];
};

const removeTodo = (state: ITodosState, action: IAction<IRemoveTodoPayload>): ITodosState => {
  return state.filter(todo => {
    return todo.id !== action.payload.id;
  });
};

const toggleTodo = (state: ITodosState, action: IAction<IToggleTodoPayload>): ITodosState => {
  return state.map(todo => {
    if (todo.id !== action.payload.id) {
      return todo;
    }

    return {...todo, isComplete: !todo.isComplete};
  });
};

const reducerMap = new Map<string, Reducer<ITodosState>>([
  [TodosActionTypes.ADD_TODO, addTodo],
  [TodosActionTypes.REMOVE_TODO, removeTodo],
  [TodosActionTypes.TOGGLE_TODO, toggleTodo]
]);
