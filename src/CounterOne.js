import React,{useReducer} from 'react'
const initialState={
    counterfirst:0,
    countersec:2,
};

const reducer=(state,action)=>{
  switch(action.type){
      case 'increment':
          return {...state,counterfirst:state.counterfirst + action.value};
      case 'decrement':
          return {...state,counterfirst:state.counterfirst - action.value};
      case 'increment2':
          return {...state,countersec:state.countersec + action.value};
      case 'decrement2':
          return {...state,countersec:state.countersec - action.value};;
      case 'reset':
          return initialState;
      default:
          return state;
  }
}
function CounterOne() {
    //multiple usereducers
    const [count,dispatch] =  useReducer(reducer,initialState); 
    const [count2,dispatch2] =  useReducer(reducer,initialState); 

    return (
        <div>
          <div>Counter1-{count.counterfirst}</div>
          <div>Counter2-{count.countersec}</div>
          <div>Counter3-{count2.counterfirst}</div>
          <button onClick={()=> dispatch({type:'increment',value: 1})}>Increment</button>
          <button onClick={()=> dispatch({type:'decrement',value:1})}>Decrement</button>
          <button onClick={()=> dispatch({type:'increment2',value: 2})}>Increment2</button>
          <button onClick={()=> dispatch({type:'decrement2',value:2})}>Decrement2</button>
          <button onClick={()=> dispatch2({type:'increment',value:3})}>IncrementReducer2</button>
          <button onClick={()=> dispatch2({type:'decrement',value:3})}>DecrementReducer2</button>
          
          <button onClick={()=> dispatch({type:'reset'})}>reset</button>
          <button onClick={()=> dispatch2({type:'reset'})}>reducer2reset</button>

        </div>
    )
}


export default CounterOne
