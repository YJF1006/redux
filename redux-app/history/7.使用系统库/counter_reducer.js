/*
* @Author: duqinzhi
* @Date:   2018-07-03 22:32:49
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-04 09:11:34
*/
/*store 相关的 计数器的reducer*/
const INCREASE = 'INCREASE'; 
const DECREASE = 'DECREASE';
let reducer = (state={number:0},action)=>{
	if(action === undefined) return state;
	switch(action.type){
		case INCREASE :
			return {number:state.number+(action.amount||1)}
		case DECREASE :
			return {number:state.number-(action.amount||1)}
		default:
			return state;
	}
}
export default reducer;