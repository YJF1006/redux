/*
* @Author: duqinzhi
* @Date:   2018-07-03 22:22:19
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-04 09:07:53
*/

//封装的connect函数 属于公用的 用来将UI组件生成含有store 的组件的函数  相当于react-redux 插件

import React from 'react';
import {PropTypes} from 'prop-types';
let connect = (mapStateToProps,mapDispatchToProps)=>(_component)=>{
	//容器组件
	class Connecter extends React.Component{
		constructor(){
			super();
			//其实就是建立了从store中state对象到当前组件状态对象的映射
			this.state = {}
		}
		componentWillMount(){  //组件将要被加载的周期函数
			this.unsubscribe = this.context.store.subscribe(()=>{   //订阅一个函数(返回的是取消订阅函数)   当store.getState().number里面的数据改变就更新this.state.number的数据，便会重新渲染
				this.setState({
					number:this.context.store.getState().number
				});
			})
		}
		componentWillUnmount(){  //组件将要卸载的时候调用
			this.unsubscribe();   //取消订阅
		}

		render(){
				return <_component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}></_component>
		}
	}
	//上下文类型 （用context取了store）
	Connecter.contextTypes = {
		store:PropTypes.object
	}
	return Connecter;
	
}
export default connect;
