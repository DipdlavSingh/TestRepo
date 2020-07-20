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
        key={user.id}>{user.first_name}
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
