import React from 'react';
import ReactDOM from 'react-dom';

import img from './logo-react.png';

const App = () => {
  return (
    <div>
      <p>Hello world</p>
      <img src={img} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));