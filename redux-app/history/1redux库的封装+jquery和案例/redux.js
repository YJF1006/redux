/*
* @Author: duqinzhi
* @Date:   2018-06-26 17:01:50
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-27 08:17:44
*/
/*自己封装redux库*/
//创建仓库
const createStore = (reducer)=>{
	//定义状态 和 监听函数数组
	let state;
	let listeners = [];

	//用来获取最新的状态
	let getState = ()=>state;    //调用这个函数就会返回state,用来获取最新的状态

	//向仓库发送action
	let dispatch = (action)=>{
		//传入老的state和新的action经过reducer处理器函数，返回新的state
		state = reducer(state,action);    // reducer：传进来的处理器   :state：老的值    action：新的值
		listeners.forEach(listeners=>listeners());  //依次执行所有的监听函数
	}
	dispatch();  //一般会在内部先调用一下，防止出现undefined
	/*订阅
		仓库内的状态变化事件，当状态发生变化之后调用对应的监听函数
		订阅方法执行后会返回一个取消订阅的函数，调用它可以取消订阅
	*/
	let subscribe = (listener)=>{
		listeners.push(listener);
		return ()=>{
			listeners = listeners.filter(item=>item!==listener);
		}
	}

	return {
		getState,  //获取最新的状态对象
		subscribe,  //订阅状态变化事件
		dispatch   //发射action
	}
}


//以对象形式导出（因为函数的返回值有三个）
export {createStore}