import {combineReducers} from 'redux';
import {ITodosState, todosReducer} from './todos';

export interface IAppState {
  todos: ITodosState;
}

export const appReducers = combineReducers({
  todos: todosReducer
});
