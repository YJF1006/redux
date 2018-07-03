/*
* @Author: duqinzhi
* @Date:   2018-07-03 15:46:02
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-03 19:16:15
*/
/*
 *  旧状态：{number：0}    {list:[]}
 *  新状态：{counter:{number:0},todo:{list:[]}}   因为一个页面只能由一个state树
 */

import {createStore} from '../redux.js';  //引入redux
import counter from '../reducers/counter.js';   //引入counter的reducer
import todo from '../reducers/todo.js';   //引入todo的reducer

//将两个的reducer组合成一个组合reducer
let combineReducers = (reducers)=>
	(state ={},action)=>{   //返回有一个reducer
		let newState = {};
		for(var key in reducers){  //counter  todo
			newState[key] = reducers[key](state[key],action)
		}
		return newState;
}

let reducer = combineReducers({  //调用组合reducer函数，把这两个reducer传进去组合
	counter,   //counter:counter   key:counter   值是引入的counter函数
	todo
})
let store = createStore(reducer);//创建一个store 里面的三个方法   getState subscribe  dispatch   
export {store}   //向外暴露store