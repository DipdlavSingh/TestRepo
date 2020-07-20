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
          this.state.users = [...res.data];
          this.state.users.map(user => {
            return (<div
                key={user.id}>{user.first_name}
            </div>)
          });
        })
        .catch(err => {
          console.log('Error'+ err)
        })
  }

  render(){
    return(
        <div className={classes.UserList}>

        </div>
    )
  }

}

export default UserList;
