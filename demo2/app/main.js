// var greet = require('./greeter.js');
// document.getElementById('root').appendChild(greet());

import React from 'react';
import {render} from 'react-dom';
import Greet from './greeter.js';
import './main.css';

render (<Greet />,document.getElementById('root'));