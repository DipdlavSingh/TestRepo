import React from 'react'

import classes from './NavItem.module.css'

import { NavLink} from "react-router-dom";

const navItem = (props) => {
  return(
      <div className={classes.NavItem}>
        <NavLink
            to={props.pathName}
            activeClassName={classes.active}
        >
          <span className="material-icons">{props.icon}</span>
          {props.children}</NavLink>
      </div>
  )
};

export default navItem;
