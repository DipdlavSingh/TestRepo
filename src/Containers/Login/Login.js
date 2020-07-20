import React, {Component} from 'react'

import classes from './Login.module.css'

import axios from '../../axios-instance'

class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  loginHandler = (event) => {
    const loginDetails = {
      email: this.state.email,
      password: this.state.password
    };
    // console.log(loginDetails);
    event.preventDefault();
    axios.post('/login/login', loginDetails)
        .then((res) => {
          // console.log(res);
          if (res.status >= 200 && res.status < 300){
            this.props.history.push('/home');
          }
        })
        .catch((err) => {
          console.log(err)
        })
  };

  onChangeHandler = (event, type) => {
    const newState = {};
    newState[this.state[type]] = event.target.value;
    this.setState({pwd:event.target.value});
  };

  onEmailChangeHandler = (event, type) => {
    console.log(type);
    this.setState({email:event.target.value});
  };
  onPwdChangeHandler = (event, type) => {
    this.setState({password:event.target.value});
  };

  render() {
    return (
        <div className={classes.Login}>
          <form>
            <div>
              <label>E-mail:</label>
              <input onChange={(event) => this.onEmailChangeHandler(event, 'email')} type='email' placeholder='E-mail'/>
            </div>
            <div>
              <label>Password:</label>
              <input onChange={(event) => this.onPwdChangeHandler(event, 'password')} type='password' placeholder='password'/>
            </div>
            <button onClick={this.loginHandler}>Submit</button>
          </form>
        </div>
    );
  }
};

export default Login;
