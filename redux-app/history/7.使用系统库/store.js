/*
* @Author: duqinzhi
* @Date:   2018-07-04 09:49:10
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-04 09:51:01
*/
import {createStore} from 'redux';  //redux库提供  不用自己写了
import reducer from './counter_reducer.js'   //引入计数器的 reducer
//创建一个store
let store = createStore(reducer); 
export default store;