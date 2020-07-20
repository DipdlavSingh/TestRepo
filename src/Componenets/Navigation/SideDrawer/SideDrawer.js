import React, { Component } from 'react'

import NavItem from '../NavItem/NavItem'

import classes from './SideDrawer.module.css'

class SideDrawer extends Component{
  state = {
    navItemList: [
      {title: 'Home', icon: 'home', pathname: '/home', color:'#7764E4'},
      {title: 'Inbox', icon: 'email', pathname: '/inbox', color:'#F98A99'},
      {title: 'Products', icon: 'widgets', pathname: '/products', color:'#4CD9F3'},
      {title: 'Invoices', icon: 'list_alt', pathname: '/invoices', color:'#FB8266'}
    ]
  };

  render(){
    const navItems = this.state.navItemList.map((navItem, i)=> {
      return (
          <NavItem
              key={i}
              icon={navItem.icon}
              pathName={navItem.pathname}
              color={navItem.color}
          >{navItem.title}</NavItem>
      );
    });
    return (
        <div className={classes.SideDrawer}>
          <h1 style={{padding: '10px'}}>Users <span className={" material-icons"}>more_vert</span></h1>
          {navItems}
        </div>
    );
  }
};

export default SideDrawer;
