import React from 'react'

import classes from './InfoComp.module.css'

const infoComp = (props) => {
  return(
    <div  className={classes.InfoComp}>
      <div className={'row'}>
        <div className={'col-md-6'}>
          <p className={classes.label}>Total Users</p>
          <p className={classes.value}>25,300</p>
        </div>
        <div className={'col-md-6'}>
          <span className={classes.icon+" material-icons"}>show_chart</span>
        </div>
      </div>
      <div className={'row'}>
        <p className={classes.bottomText}><span>5% </span>since last month.</p>
      </div>
    </div>
  );
};

export default infoComp;
