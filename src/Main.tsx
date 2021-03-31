import React from 'react';
import ReactDom from 'react-dom';
import Login from './Login'

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const Main = () => {
  return (
    <div>
      hello world !!!!
      <Login />
    </div>
  )
}

ReactDom.render(<Main />, mainElement);
