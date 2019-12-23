import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MainContext from './ContextHook/MainContext';
import CounterOne from './ReducerHook/CounterOne';
import Main from './GlobalStateUsingReducer&Context/Main';
import Datafetch from './UseEffect/Datafetch';
import CustomNavbar from './CustomNavbar';
import Home from './Home';


function App() {
  return (
    <Router>
    <div className="App">
        <CustomNavbar/>

       <Route exact path="/"  component={Home}/>
       <Route path="/ContextHook"  component={MainContext}/>
       <Route path="/ReducerHook"  component={CounterOne}/>
       <Route path="/EffectHook"  component={Datafetch}/>
       <Route path="/GlobalContextReducer" component={Main}/>
      {/* <MainContext/>             
      <CounterOne/>
      
      <Main/>
     <b><h1> DataFetching Using useState and useEffect:</h1></b>
      <Datafetch/>
      <b><h1>DataFetching Using useReducer and useEffect:</h1></b>
      <Datafetch2/> */}
    </div>
    </Router>
  );
}

export default App;
