import React, {Component} from 'react';
import './AppRoot.scss';

export class AppRoot extends Component<void, void> {
  public render() {
    return <div className="AppRoot">
      <h1 className="AppRoot-title">React App</h1>
      <img className="AppRoot-image" src="/assets/images/react-logo.svg"/>
    </div>;
  }
}
