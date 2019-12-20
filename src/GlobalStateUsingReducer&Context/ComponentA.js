import React,{useContext} from 'react'
import { UserContext1 } from './Main'

function ComponentA() {
  const countContext=useContext(UserContext1);
    return (
        <div>
            ComponentA-{countContext.counterState}
            <button onClick={()=>countContext.counterDispatch('increment')}>increment</button>
            <button onClick={()=>countContext.counterDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.counterDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentA
