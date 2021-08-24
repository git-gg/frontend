import React from 'react';
import './App.css';
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/callback' component={Login}/>
    </BrowserRouter>
    </>
  );
}

export default App;
