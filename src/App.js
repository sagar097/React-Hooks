import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentC from './ComponentC';
import CounterOne from './CounterOne';
import Main from './GlobalStateUsingReducer&Context/Main';
import Datafetch from './Datafetch';
import Datafetch2 from './Datafetch2';
export const UserContext = React.createContext();
export const UserData = React.createContext();

function App() {
  return (
    <div className="App">
    
      <UserContext.Provider value={'First_Context_Data'}>
        <UserData.Provider value={'Second_Context_Data'}>
          <ComponentC/>
        </UserData.Provider>  
      </UserContext.Provider>
      <CounterOne/>
      Global State Management Using useReducer and useContext:
      <Main/>
     <b><h1> DataFetching Using useState and useEffect:</h1></b>
      <Datafetch/>
      <b><h1>DataFetching Using useReducer and useEffect:</h1></b>
      <Datafetch2/>
    </div>
  );
}

export default App;
