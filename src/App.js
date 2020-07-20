import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'

import Layout from './hoc/layout/layout'
import Login from "./Containers/Login/Login";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path='/login' exact component={Login}/>
          <Route path='/home' exact component={Layout}/>
          {/*<Layout/>*/}
        </Switch>
      </div>
  );
}

export default App;
