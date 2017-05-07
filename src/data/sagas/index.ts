import {watchTodos} from './todos';

export function* rootSaga(): IterableIterator<Array<IterableIterator<any>>> {
  yield [
    watchTodos()
  ];
}
