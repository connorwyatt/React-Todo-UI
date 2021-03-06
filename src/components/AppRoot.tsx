import React, {Component, SyntheticEvent} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IAction} from '../data/actions/IAction';
import {addTodo, getTodosServer, removeTodo, toggleTodo} from '../data/actions/todos';
import {IAppState} from '../data/reducers';
import {ITodo} from '../data/reducers/todos';
import './AppRoot.scss';
import {TodoList} from './TodoList';

interface IProps {
  todos: Array<ITodo>;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  refresh: () => void;
}

interface IState {
  value: string;
}

class UnconnectedAppRoot extends Component<IProps, IState> {
  public constructor(props: IProps, context: any) {
    super(props, context);

    this.state = {value: ''};

    this.onChange = this.onChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  public render() {
    return <div className="AppRoot">
      <h1 className="AppRoot-title">React Todo UI</h1>

      <button onClick={this.refresh}>Refresh</button>

      <div>
        <label htmlFor="todo">Text</label>
        <input id="todo" type="text" value={this.state.value} onChange={this.onChange}/>
        <button type="button" onClick={this.addTodo}>Add Todo</button>
      </div>

      <TodoList todos={this.props.todos} onRemove={this.removeTodo} onToggle={this.toggleTodo}/>
    </div>;
  }

  private onChange(event: SyntheticEvent<HTMLInputElement>): void {
    const value = event.currentTarget.value;

    this.setState({value});
  }

  private addTodo(): void {
    this.setState({value: ''});

    this.props.addTodo(this.state.value);
  }

  private removeTodo(id: number): void {
    this.props.removeTodo(id);
  }

  private toggleTodo(id: number): void {
    this.props.toggleTodo(id);
  }

  private refresh(): void {
    this.props.refresh();
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>) => {
  return {
    addTodo: (text: string): void => {
      dispatch(addTodo(text));
    },
    removeTodo: (id: number): void => {
      dispatch(removeTodo(id));
    },
    toggleTodo: (id: number): void => {
      dispatch(toggleTodo(id));
    },
    refresh: (): void => {
      dispatch(getTodosServer());
    }
  };
};

export const AppRoot = connect(mapStateToProps, mapDispatchToProps)(UnconnectedAppRoot);
