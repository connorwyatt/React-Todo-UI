import {ITodo} from '../reducers/todos';
import {IAction} from './IAction';

let id = 0;

export class TodosActionTypes {
  public static GET_TODOS_SERVER = '[TODOS] GET_TODOS_SERVER';
  public static GET_TODOS_SERVER_SUCCESS = '[TODOS] GET_TODOS_SERVER_SUCCESS';
  public static ADD_TODO = '[TODOS] ADD_TODO';
  public static REMOVE_TODO = '[TODOS] REMOVE_TODO';
  public static TOGGLE_TODO = '[TODOS] TOGGLE_TODO';
}

export const getTodosServer = (): IAction<null> => ({
  type: TodosActionTypes.GET_TODOS_SERVER,
  payload: null
});

export interface IGetTodosServerSuccessPayload {
  todos: Array<ITodo>;
}

export const getTodosServerSuccess = (todos: Array<ITodo>): IAction<IGetTodosServerSuccessPayload> => ({
  type: TodosActionTypes.GET_TODOS_SERVER_SUCCESS,
  payload: {todos}
});

export interface IAddTodoPayload {
  todo: ITodo;
}

export const addTodo = (text: string): IAction<IAddTodoPayload> => {
  const todo: ITodo = {
    text,
    id: id++,
    isComplete: false
  };

  return {
    type: TodosActionTypes.ADD_TODO,
    payload: {todo}
  };
};

export interface IRemoveTodoPayload {
  id: number;
}

export const removeTodo = (id: number): IAction<IRemoveTodoPayload> => ({
  type: TodosActionTypes.REMOVE_TODO,
  payload: {id}
});

export interface IToggleTodoPayload {
  id: number;
}

export const toggleTodo = (id: number): IAction<IToggleTodoPayload> => ({
  type: TodosActionTypes.TOGGLE_TODO,
  payload: {id}
});
