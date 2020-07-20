import React, {Component} from 'react'

import Header from './Header/Header'
import UserList from './UserList/UserList'

import classes from './MainContent.module.css'

class MainContent extends Component{
  render(){
    return(
        <div className={classes.MainContent}>
          <Header/>
          <UserList/>
        </div>
    );
  }
}

export default MainContent;
