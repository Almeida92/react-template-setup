import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Setup Template for React App';

ReactDOM.render(
  title,
  document.getElementById('app')
);

module.hot.accept();