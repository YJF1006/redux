/*
* @Author: duqinzhi
* @Date:   2018-06-26 17:00:52
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-27 08:14:09
*/
import {createStore} from './redux.js';
import $ from 'jquery';

$(document.body).append(`
<p id='counter'></p>
<button id='increaseBtn'> + </button>
<button id='decreaseBtn'> - </button>
`);

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

//store 里面的三个方法   getStore  subscribe  dispatch
let store = createStore(reducer);
let render = ()=>{
	document.querySelector('#counter').innerHTML = store.getState().number;
}

//当仓库里的state发生变化时，会重新执行render读取最新的状态，并更新视图
store.subscribe(render);

//加的按钮订阅  +3
$('#increaseBtn').click(()=>{
	store.dispatch({type:'INCREASE',amount:3});
})
//减的订阅   -2
$('#decreaseBtn').click(()=>{
	store.dispatch({type:'DECREASE',amount:2})
});


render();
