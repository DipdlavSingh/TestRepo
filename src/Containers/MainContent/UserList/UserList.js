import React, {Component} from 'react'

import axios from '../../../axios-instance'

class UserList extends Component{

  users = [];

  componentDidMount() {
    axios.get('/users')
        .then(res => {

        })
        .catch(err => {
          console.log(err)
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
