import React from 'react';
import ReactDOM from 'react-dom';
import App from './Parent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Parent />, div);
});
