import React from 'react'

import classes from './NavItem.module.css'

import { NavLink} from "react-router-dom";

const navItem = (props) => {
  let style = {};

  if (props.pathName === window.location.pathname){
    style = {
      backgroundColor: '#F6F9FC',
      color: props.color
     }
  }

  // TODO: align icons to text
  return(
      <div className={classes.NavItem} style={style}>
        <NavLink
            className={classes.NavLinkClass}
            to={props.pathName}
            activeClassName={classes.active}>
          <span className={classes.navIcon+" material-icons"} style={{color:props.color}}>{props.icon}</span>
          {props.children}
        </NavLink>
      </div>
  )
};

export default navItem;
