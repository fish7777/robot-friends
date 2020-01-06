import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Card from './Card';
import CardList from './CardList'
import * as serviceWorker from './serviceWorker';
import { robots } from './Robots'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
