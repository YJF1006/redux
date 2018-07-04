/*
* @Author: duqinzhi
* @Date:   2018-07-03 21:11:51
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-04 09:52:10
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.js';    //引入计数器组件
import store from '/store.js';   //引入store
import {Provider}from 'react-redux';   //Provider不要自己写了，使用react-redux系统库里面的


ReactDOM.render(
	<Provider store={store}>
		<Counter></Counter>
	</Provider>,
	document.querySelector('#root')
)

/*一般写项目的格式就是这
	我们需要写  UI组件 reducer 
*/