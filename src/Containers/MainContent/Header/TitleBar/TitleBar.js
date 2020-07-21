import React from 'react'

import classes from './TitleBar.module.css'

const titleBar = (props) => {
  console.log(props);
  return(
      <div className={classes.TitleBar+' row'}>
        <div className={classes.titleSubDiv+' col'}>
          <div className={classes.hasSearch+" form-group"}>
            <span className={classes.formControlFeedback+" fa fa-search"}/>
            <input type="text" className={classes.formControl} placeholder="Search"/>
          </div>
        </div>

        <div className={classes.titleSubDiv+' col'}>
          <div className='float-right'>
            <i className={classes.titleIcon+" fa fa-bell-o"} aria-hidden="true"/>
            <i className={classes.titleIcon+" fa fa-question-circle-o"} aria-hidden="true"/>
            <img src={props.users[0]?props.users[0].avatar:null} alt='404'/>
          </div>
        </div>
      </div>
  )
};

export default titleBar;
