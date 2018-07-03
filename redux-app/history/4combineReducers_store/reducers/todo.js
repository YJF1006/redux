/*
* @Author: duqinzhi
* @Date:   2018-07-03 16:40:45
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-03 17:11:51
*/
/*Todo 组件的处理函数*/
import {ADD_TODO,DELETE_TODO} from '../store/actions.js';   //引入action的type类型关键字

let reducer = (state={list:[]},action)=>{
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

export default reducer;