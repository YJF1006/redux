/*
* @Author: duqinzhi
* @Date:   2018-06-27 10:54:07
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-02 20:09:17
*/
import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from './redux.js';
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
//store 里面的三个方法   getState subscribe  dispatch
let store = createStore(reducer);

//声明组件
class Counter extends React.Component{
	constructor(){
		super();
		this.state = {number:store.getState().number};  //定义默认状态
	}
	handleIncrease = ()=>{
		store.dispatch({type:'INCREASE',amount:3})
	}
	handleDecrease = ()=>{
		store.dispatch({type:'DECREASE',amount:2})
	}
	componentWillMount(){  //组件将要被加载的周期函数
		this.unsubscribe = store.subscribe(()=>{   //订阅一个函数(返回的是取消订阅函数)   当store.getState().number里面的数据改变就更新this.state.number的数据，便会重新渲染
			this.setState({
				number:store.getState().number
			});
		})
	}
	componentWillUnmount(){  //组件将要卸载的时候调用
		this.unsubscribe();   //取消订阅
	}
	render(){
		return (
			<div>
				<p>{this.state.number}</p>
				<button onClick={this.handleIncrease}>+</button>
				<button onClick={this.handleDecrease}>-</button>
			</div>
		)
	}
}

//渲染
ReactDOM.render(
		<Counter></Counter>,
		document.querySelector('#root')
	)
	
