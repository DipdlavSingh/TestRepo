import React, {Component} from 'react'

import axios from '../../../axios-instance'
import classes from './UserList.module.css'
import DotButton from '../../../Componenets/UI/DotButton/DotButton'

class UserList extends Component {

  state = {
    users: []
  };

  componentDidMount() {
    axios.get('/users')
        .then(res => {
          this.setState({users: [...res.data.data]});
        })
        .catch(err => {
          console.log(err)
        })
  }

  render() {
    const userDivs = this.state.users.map(user => {
      return (
          <div className={classes.urow+' row'} key={user.id}>
            <div className={classes.elem+' col-md-3'}><img src={user.avatar}/></div>
            <div className={classes.elem+' col-md-3'}>{user.last_name}</div>
            <div className={classes.elem+' col-md-3'}>{user.email}</div>
            <div className={classes.elem+' col-md-3'}><DotButton/></div>
          </div>
      )
    });
    return (
        <div className={classes.UserList}>
            <div className={classes.user+' container'}>
              <div className={classes.titleRow+' row'}>
                <h3>Users</h3>
              </div>
              <div className={classes.headRow+' row'}>
                <div className={' col-md-3'}>User</div>
                <div className={' col-md-3'}>Last Name</div>
                <div className={' col-md-3'}>E-mail</div>
                <div className={' col-md-3'}></div>
              </div>
            {userDivs}
            </div>
        </div>
    )
  }

}

export default UserList;
