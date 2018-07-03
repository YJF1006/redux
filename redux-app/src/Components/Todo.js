/*
* @Author: duqinzhi
* @Date:   2018-07-02 21:38:48
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-03 15:30:13
*/
import React from 'react';
import {createStore} from './redux.js';   //引入封装的redux库

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
//定义一个处理器函数
let reducer = (state={list:['chifan']},action)=>{
	let list = state.list;
	console.log(action);
	if(action == undefined) return state;   //第一次的时候action为undefined所以返回原来的值(默认的state值)
	switch(action.type){
		case ADD_TODO:   //增加  把新传的text传进list数组里面
			list.push(action.text);
			return {list:[...list]}; 
		case DELETE_TODO:   //减少   在数组中删除传进来的这个action对应的index
			list.splice(action.index);
			return {list:[...list]}   //我们的状态具有不变形，每次都要返回一个新的对象
		default:
			return state;   //否则就返回老的state
	}
}

//把处理器传给store
let store = createStore(reducer);

export default class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state = {list:store.getState().list}
	}
	handleKeyDown = (event)=>{   //处理按键按下的事件
		if(event.keyCode === 13 && event.target.value.length > 0){
			store.dispatch({   //给store发布action
				type:ADD_TODO,
				text:event.target.value
			});
			event.target.value= '';
		}
	}
	//删除todo
	deleteTodo = (index)=>{
		store.dispatch({
			type:DELETE_TODO,
			index
		})
	}
	componentWillMount(){
		this.unSubscribe = store.subscribe(()=>{
			this.setState({
				list:store.getState().list
			})
		})
	} 
	componentWillUnmount(){
		this.unSubscribe();
	}
	render(){
		return (
			<div>
				<input type="text" onKeyDown = {this.handleKeyDown}/>
				<ul>  {/*映射*/}
					{
						this.state.list.map((todo,index)=>{
							return (
								<li key={index}>
									{todo}
									<button onClick={()=>this.deleteTodo(index)}>-</button>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}