/*
* @Author: duqinzhi
* @Date:   2018-07-02 20:04:47
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-03 19:01:02
*/
import React from 'react';
import {createStore} from '../redux.js';   //引入封装的redux库
import {store} from '../store/store.js';   //引入store
import {INCREASE,DECREASE} from '../store/actions.js';  //引入关键字

let increase = (amount)=>{     //定义增加的action
	return {type:INCREASE,amount}
}
let decrease = (amount)=>{
	return {type:DECREASE,amount}
}
//默认导出计数器组件
export default class Counter extends React.Component{
	constructor(){
		super();
		this.state = {number:store.getState().counter.number};  //定义默认状态
	}
	handleIncrease = ()=>{
		store.dispatch(increase(3))   //向store发送加的action
	}
	handleDecrease = ()=>{
		store.dispatch(decrease(2))  //向store发送减的action
	}
	componentWillMount(){  //组件将要被加载的周期函数
		this.unsubscribe = store.subscribe(()=>{   //订阅一个函数(返回的是取消订阅函数)   当store.getState().number里面的数据改变就更新this.state.number的数据，便会重新渲染
			this.setState({
				number:store.getState().counter.number
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