import {apply, put, takeEvery} from 'redux-saga/effects';
import {getTodosServerSuccess, TodosActionTypes} from '../actions/todos';
import {TodosService} from '../services/TodosService';
import {AxiosResponse} from 'axios';

const todosService: TodosService = TodosService.instance;

export function* getTodos() {
  const todosResponse: AxiosResponse = yield apply(todosService, todosService.getTodos);

  yield put(getTodosServerSuccess(todosResponse.data));
}

export function* watchTodos() {
  yield takeEvery(TodosActionTypes.GET_TODOS_SERVER, getTodos);
}
