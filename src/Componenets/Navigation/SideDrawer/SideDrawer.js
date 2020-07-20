import React, { Component } from 'react'

import NavItem from '../NavItem/NavItem'

import classes from './SideDrawer.module.css'

class SideDrawer extends Component{
  state = {
    navItemList: [
      {title: 'Home', icon: ''},
      {title: 'Inbox', icon: ''},
      {title: 'Products', icon: ''},
      {title: 'Invoices', icon: ''}
    ]
  };

  render(){
    const navItems = this.state.navItemList.map((navItem, i)=> {
      return (
          <NavItem
              key={i}
              icon={navItem.icon}
          >{navItem.title}</NavItem>
      );
    });
    return (
        <div className={classes.SideDrawer}>

          {navItems}
        </div>
    );
  }
};

export default SideDrawer;
