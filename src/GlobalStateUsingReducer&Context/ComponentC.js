import React,{useContext} from 'react'
import { UserContext1 } from './Main'

function ComponentC() {
  const countContext=useContext(UserContext1);
    return (
        <div>
            ComponentC-{countContext.counterState}
            <button onClick={()=>countContext.counterDispatch('increment')}>increment</button>
            <button onClick={()=>countContext.counterDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.counterDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentC
