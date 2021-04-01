import React, { Component } from 'react';
import ReactDom from 'react-dom';
<<<<<<< HEAD
import App from './App';
import state from './store';
import { Provider } from 'react-redux';
=======
import Login from './Login'
>>>>>>> be8cfb3bc8252d19372dd1d2cb88e673f6ce738c

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

<<<<<<< HEAD
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
=======
const Main = () => {
  return (
    <div>
      hello world !!!!
      <Login />
    </div>
  )
>>>>>>> be8cfb3bc8252d19372dd1d2cb88e673f6ce738c
}

ReactDom.render(<Main />, mainElement);
