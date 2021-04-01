import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './App';
import state from './store';
import { Provider } from 'react-redux';
import Login from './Login'

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

class Main extends Component {
  constructor(props: any) {
    super(props)

  }
  render() {
    console.log(state);
    return (
      <Provider store={state}>
        <App />
      </Provider>
    )
  }
}

ReactDom.render(<Main />, mainElement);
