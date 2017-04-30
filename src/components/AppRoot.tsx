import React, {Component} from 'react';
import './AppRoot.scss';
import {TodoList} from './TodoList';

export class AppRoot extends Component<void, void> {
  public render() {
    return <div className="AppRoot">
      <h1 className="AppRoot-title">React Todo UI</h1>

      <TodoList/>
    </div>;
  }
}
