/*
* @Author: duqinzhi
* @Date:   2018-07-03 21:11:51
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-04 08:59:16
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './redux.js';  //引入封装的 redux
import Counter from './Counter.js';    //引入计数器组件
import reducer from './counter_reducer.js'   //引入计数器的 reducer
import Provider from './Provider.js';

//创建一个store
let store = createStore(reducer); 

ReactDOM.render(
	<Provider store={store}>
		<Counter></Counter>
	</Provider>,
	document.querySelector('#root')
)