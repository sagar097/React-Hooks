import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


export const UserContext1 = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function Main() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <React.Fragment>
      <UserContext1.Provider value={{ counterState: count, counterDispatch: dispatch }}>
        <div className="Main">
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </UserContext1.Provider>
    </React.Fragment>

  );
}

export default Main;
