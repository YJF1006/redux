/*
* @Author: duqinzhi
* @Date:   2018-07-04 07:50:20
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-04 09:10:03
*/
/*最外层的组件，在index.js里面引入，
利用context方法把store存里面方便所有组件取store(因为connet是公用的 他的store就是要靠context取得)*/
import React from 'react';
import {PropTypes} from 'prop-types';
export default class Provider extends React.Component{
	getChildContext(){
		return {store:this.props.store}
	}
	render(){
		return this.props.children;  //渲染他的孩子
	}
}
Provider.childContextTypes = {
	store:PropTypes.object
}
