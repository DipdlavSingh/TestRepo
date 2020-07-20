import React from 'react'

import classes from './NavItem.module.css'

const navItem = (props) => {
  return(
      <div className={classes.NavItem}>
        <p>{props.children}</p>
      </div>
  )
};

export default navItem;
