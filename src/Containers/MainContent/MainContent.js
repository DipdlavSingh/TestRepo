import React, {Component} from 'react'

import UserList from './UserList/UserList'

import classes from './MainContent.module.css'

class MainContent extends Component{
  render(){
    return(
        <UserList/>
    );
  }
}

export default MainContent;
