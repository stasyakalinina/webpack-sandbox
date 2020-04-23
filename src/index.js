import React from 'react';
import ReactDOM from 'react-dom';
import css from './main.scss';

import img from './logo-react.png';

console.log(css.toString());

const App = () => {
  return (
    <div>
      <p>Hello world</p>
      <img src={img} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));