import React from 'react';
import ReactDom from 'react-dom';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const Main = () => {
  
    return (
      <div>
        hello world ARE WE THERE YET DADDD??????
      </div>
    )
}

ReactDom.render(<Main />, mainElement);