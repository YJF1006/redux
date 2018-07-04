/*
* @Author: duqinzhi
* @Date:   2018-07-03 21:22:42
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-04 09:37:29
*/

/*使用系统库来写react-redux*/

import React from 'react';
import {createStore} from 'redux';
import {connect}from 'react-redux';  //引入系统库里面的connect
const INCREASE = 'INCREASE'; 
const DECREASE = 'DECREASE';
//1.UI组件
class Counter extends React.Component{
	render(){
		return(
			<div>
				<p>{this.props.number}</p>
				<button onClick = {this.props.OnIncrease}>+</button>
				<button  onClick = {this.props.OnDecrease}>-</button>
			</div>
		)
	}
}

//2.容器组件里面mapStateToProps(映射函数)  mapStateToProps 把store里的状态对象映射成属性
	let mapStateToProps = (state)=>({
		number:state.number
	})
//3.把dispatch方法映射成UI组件的属性 
	let mapDispatchToProps = (dispatch)=>({   //key是OnIncrease   值是函数
		OnIncrease:()=>dispatch({type:INCREASE}),
		OnDecrease:()=>dispatch({type:DECREASE})
	})

//用connect函数直接生成
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
