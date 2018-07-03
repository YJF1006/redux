/*
* @Author: duqinzhi
* @Date:   2018-07-02 20:10:15
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-03 15:44:38
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter.js';   //引入计数器组件
import Todo from './Components/Todo.js';

ReactDOM.render(
	<div>
		<Counter></Counter>
		<Todo></Todo>
	</div>,
	document.querySelector('#root')
);