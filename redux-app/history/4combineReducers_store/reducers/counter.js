/*
* @Author: duqinzhi
* @Date:   2018-07-03 15:52:14
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-03 17:11:41
*/
/**
 * counter 的 reducer 的函数
 */

import {INCREASE,DECREASE} from '../store/actions.js';

let reducer = (state={number:0},action)=>{
	if(action === undefined) return state;
	switch(action.type){
		case INCREASE :
			return {number:state.number+action.amount}
		case DECREASE :
			return {number:state.number-action.amount}
		default:
			return state;
	}
}

export default reducer;