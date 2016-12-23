// var config = require('./config.json');
// module.exports = function(){
// 	var element = document.createElement('div');
// 	element.textContent = config.greetText;
// 	return element;
// };

import React,{Component} from 'react';
import config from './config.json';

class greet extends Component {
	render () {
		return (
			<div>
				{config.greetText}
			</div>
		);
	}
}
export default greet;