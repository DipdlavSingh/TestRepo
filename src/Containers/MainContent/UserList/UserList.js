import React, {Component} from 'react'

import axios from '../../../axios-instance'
import classes from './UserList.module.css'

class UserList extends Component{

  state = {
    users: []
  };

  componentDidMount() {
    axios.get('/users')
        .then(res => {
          this.setState({users:[...res.data.data]});
        })
        .catch(err => {
          console.log(err)
        })
  }

  render(){
    const userDivs = this.state.users.map(user => {
    return (<div
        className={classes.user}
        key={user.id}>
      <div>{user.first_name}</div>
      <div>{user.last_name}</div>
      <div>{user.email}</div>
    </div>)
  });
    return(
        <div className={classes.UserList}>
          {userDivs}
        </div>
    )
  }

}

export default UserList;
