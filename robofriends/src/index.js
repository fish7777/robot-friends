import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Card from './Card';
import CardList from './CardList'
import * as serviceWorker from './serviceWorker';
import { robots } from './Robots'

ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));

serviceWorker.unregister();
