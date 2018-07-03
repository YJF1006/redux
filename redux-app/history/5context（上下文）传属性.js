/*
* @Author: duqinzhi
* @Date:   2018-07-03 19:48:23
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-03 21:05:43
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';  //1.引入prop-types组件（需要安装）
class Container extends React.Component{
	//3.getChildContext 函数返回子组件上下文对象  这个Contain里面的子组件都能获取到context
	getChildContext(){    
		return {color:'green'}
	}
	render(){
		return(
			<MessageList messages={this.props.messages}></MessageList>
		)
	}
}
//2.规定Container子组件上下文类型  
Container.childContextTypes ={
	color:PropTypes.string
}

class MessageList extends React.Component{
	render(){
		return(
			<ul>
				{   //做映射
					this.props.messages.map((message,index)=><Message message={message}></Message>)
				}
			</ul>
		)
	}
}
class Message extends React.Component{
	render(){
		return( //4.子组件引用  this.context.color
			<li style={{color:this.context.color}}>{this.props.message}</li>
		)
	}
}
//5.Message上下文类型
Message.contextTypes = {
	color:proptypes.string
}

let messages = [1,2,3] 
ReacrDOM.render(
	<Container messages={messages}></Container>
	document.querySelector('#root')
);

/**context 上下文  
 * 1.这样便不用一级一级传递属性了，子组件可以通过context直接获取到属性
 *
 * 2. 使用步骤
 * 		1. 引入 prop-types 安装包
 * 		
 * 		2.父级组件里面定义一个getChildContext函数   函数返回子组件上下文对象 
 * 			getChildContext(){    
				return {color:'green'}
			}

		3.父级声明子组件上下文类型（是一个对象）
			父组件.childContextTypes = {
				属性名:proptypes.string  //例如 color:proptypes.string
			}

		4.子组件使用这个属性  
			this.context.属性名    例如：this.context.color

		5.子组件声明上下文类型
			子组件.contextTypes = {
				属性名:proptypes.string     //例如 color:proptypes.string
			}
 */