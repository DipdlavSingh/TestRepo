import React, {Component} from 'react'

import UserList from './UserList/UserList'

import classes from './MainContent.module.css'

class MainContent extends Component{
  render(){
    return(
        <div className={classes.MainContent}>
          <UserList/>
        </div>
    );
  }
}

export default MainContent;
