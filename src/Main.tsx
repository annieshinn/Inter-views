import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

class Main extends Component {
  constructor(props: any) {
    super(props)

  }
  render() {

    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDom.render(<Main />, mainElement);
