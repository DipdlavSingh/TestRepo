import React from 'react'
import classes from "../PathBar/PathBar.module.css";

const pathBar = (props) => {
  return(
      <div className={classes.PathBar+' row'}>
        <div className={classes.pathSubDiv}>
          <h5>HOME</h5>
        </div>
        <div className={classes.pathSubDiv}>
          <i style={{fontSize:'1.5rem'}} className="fa fa-home" aria-hidden="true"/>
          <span style={{marginLeft:'10px'}}>Home - Dashboard</span>
        </div>
      </div>
  );
};

export default pathBar;
