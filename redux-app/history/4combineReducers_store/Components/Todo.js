/*
* @Author: duqinzhi
* @Date:   2018-07-02 21:38:48
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-03 19:01:39
*/
import React from 'react';
import {createStore} from '../redux.js';   //引入封装的redux库
import {store} from '../store/store.js';   //引入store
import {ADD_TODO,DELETE_TODO} from '../store/actions.js';   //引入action的type类型关键字

export default class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state = {list:store.getState().todo.list}
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
				list:store.getState().todo.list
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