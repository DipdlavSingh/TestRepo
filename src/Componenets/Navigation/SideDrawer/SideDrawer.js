import React, { Component } from 'react'

import NavItem from '../NavItem/NavItem'

import classes from './SideDrawer.module.css'

class SideDrawer extends Component{
  state = {
    navItemList: [
      {title: 'Home', icon: 'home', pathname: '/home'},
      {title: 'Inbox', icon: 'email', pathname: '/inbox'},
      {title: 'Products', icon: 'widgets', pathname: '/products'},
      {title: 'Invoices', icon: 'list_alt', pathname: '/invoices'}
    ]
  };

  render(){
    const navItems = this.state.navItemList.map((navItem, i)=> {
      return (
          <NavItem
              key={i}
              icon={navItem.icon}
              pathName={navItem.pathname}
          >{navItem.title}</NavItem>
      );
    });
    return (
        <div className={classes.SideDrawer}>
          <h1>Users</h1>
          {navItems}
        </div>
    );
  }
};

export default SideDrawer;
