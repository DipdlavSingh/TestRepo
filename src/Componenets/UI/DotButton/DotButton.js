import React from 'react'

import classes from './DotButton.module.css'

const dotButton = (props) => {
  return(
      <div className={classes.DotButton}>
        <span className={classes.btn+" material-icons"}>more_vert</span>
      </div>
  )
};

export default dotButton;
