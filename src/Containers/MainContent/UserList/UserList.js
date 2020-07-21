import React, {Component} from 'react'

import classes from './UserList.module.css'
import DotButton from '../../../Componenets/UI/DotButton/DotButton'

class UserList extends Component {

  render() {
    const userDivs = this.props.users.map(user => {
      return (
          <div className={classes.urow+' row'} key={user.id}>
            <div className={classes.elem+' col'}>
              <img className={classes.userImg} src={user.avatar}/>
              <strong style={{marginLeft:'10px'}}>{user.first_name}</strong>
            </div>
            <div className={classes.elem+' col'}>{user.first_name}</div>
            <div className={classes.elem+' col'}>{user.last_name}</div>
            <div className={classes.elem+' col'}>{user.email}</div>
            <div className={classes.elem+' col'}>
              <img className={classes.userImg} style={{height:'2rem'}} src={user.avatar}/>
              <img className={classes.userImg} style={{height:'2rem',marginLeft:'-10px'}} src={user.avatar}/>
              <img className={classes.userImg} style={{height:'2rem',marginLeft:'-10px'}}src={user.avatar}/>
            </div>
            <div className={classes.elem+' col'}>
              <div className={classes.progBar+" progress"} style={{height:'5px'}}>
                <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"/>
              </div>
            </div>
            <div className={classes.elem+' col'}><div style={{textAlign:'center'}}><DotButton/></div></div>
          </div>
      )
    });

    // const onPageChangeHandler = (event, page) => {
    //   even.preventDefault();
    //
    // };

    // const pageList = [];
    // for(let i; i < (+props.users.total_pages); i++){
    //   const temp = <a href="">{i+1}</a>;
    //   pageList.push()
    // }

    return (
        <div className={classes.UserList}>
            <div className={classes.user+' container'}>
              <div className={classes.titleRow+' row'}>
                <div className='col'>
                  <p>User Table</p>
                </div>
                <div className='col'>
                  <button className={classes.hollowButton}>Export Data</button>
                </div>
              </div>
              <div className={classes.headRow+' row'}>
                <div className={' col'}>User<i className="fa fa-sort" aria-hidden="true"/></div>
                <div className={' col'}>First Name</div>
                <div className={' col'}>Last Name</div>
                <div className={' col'}>E-mail<i className="fa fa-sort" aria-hidden="true"/></div>
                <div className={' col'}>Group</div>
                <div className={' col'}>Dummy</div>
                <div className={' col'}></div>
              </div>
            {userDivs}
            </div>

          <div style={{textAlign:'right',padding:'10px 0'}}>
            <div className={classes.paginate}>
              <a href="">&lt;</a>
              <a href="" className={classes.active}>1</a>
              <a href="">2</a>
              <a href="">3</a>
              <a href="">4</a>
              <a href="">&gt;</a>
            </div>
          </div>
        </div>
    )
  }

}

export default UserList;
