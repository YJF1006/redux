/*
* @Author: duqinzhi
* @Date:   2018-06-27 10:54:07
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-02 18:33:57
*/
import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from './redux.js';   //引入redux自己封装的库
import $ from 'jquery';

//处理器函数  
//state是状态树，可以是任意的结构   
//action是一个纯对象{type:'',，amount}   本案例中可能有{type:'INCREASR',type:'DECREASE'}
let reducer = (state={number:0},action)=>{
	if(action === undefined) return state;
	switch(action.type){
		case 'INCREASE' :
			return {number:state.number+action.amount}
		case 'DECREASE' :
			return {number:state.number-action.amount}
		default:
			return state;
	}
}
//store 里面的三个方法   getState(更新数据)  subscribe（订阅）  dispatch（向仓库发送action）
let store = createStore(reducer);

//声明组件
class Counter extends React.Component{
	handleIncrease = ()=>{
		store.dispatch({type:'INCREASE',amount:3})
	}
	handleDecrease = ()=>{
		store.dispatch({type:'DECREASE',amount:2})
	}
	render(){
		return (
			<div>
				<p>{store.getState().number}</p>
				<button onClick={this.handleIncrease}>+</button>
				<button onClick={this.handleDecrease}>-</button>
			</div>
		)
	}
}

//渲染方法
let render = ()=>{
	ReactDOM.render(
		<Counter></Counter>,
		document.querySelector('#root')
	)
	
}
//第一次先渲染一次
render();
//渲染订阅，以后数据一改变，就重新render
store.subscribe(render)