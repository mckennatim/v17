import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App.js'
 
const title = 'Timecards - JobCosts';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);
