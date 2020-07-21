import React, {Component} from 'react'

import Header from './Header/Header'
import UserList from './UserList/UserList'

import classes from './MainContent.module.css'
import axios from "../../axios-instance";

class MainContent extends Component{
  state = {
    usersData:[]
  };
  componentDidMount() {
    axios.get('/users')
        .then(res => {
          this.setState({usersData: [...res.data.data]});
        })
        .catch(err => {
          console.log(err);
        })
  }

  render(){
    return(
        <div className={classes.MainContent+' col-md-10'}>
          <Header users={ this.state.usersData}/>
          <UserList users={this.state.usersData}/>
        </div>
    );
  }
}

export default MainContent;
