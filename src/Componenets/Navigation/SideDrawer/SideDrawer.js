import React, { Component } from 'react'

import NavItem from '../NavItem/NavItem'

import classes from './SideDrawer.module.css'

class SideDrawer extends Component{
  state = {
    navItemList: [
      {title: 'Home', icon: 'home', pathname: '/home', color:'#7764E4'},
      {title: 'Inbox', icon: 'email', pathname: '/inbox', color:'#F98A99'},
      {title: 'Products', icon: 'widgets', pathname: '/products', color:'#4CD9F3'},
      {title: 'Invoices', icon: 'list_alt', pathname: '/invoices', color:'#FB8266'},
      {title: 'Messages', icon: 'chat_bubble_outline', pathname: '/messages', color:'#FEC686'},
      {title: 'Calendars', icon: 'today', pathname: '/calendars', color:'#F66277'},
      {title: 'Customers', icon: 'account_box', pathname: '/customers', color:'#40D6F2'},
      {title: 'Settings', icon: 'settings', pathname: '/settings', color:'#FB8266'}
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
        <div className={classes.SideDrawer+' col-md-2'}>
          <div className={classes.titleDiv}>
            <h4>
              <strong>Users</strong>
              <i className="fa fa-bars fa-sm float-right" aria-hidden="true"/>
            </h4>
          </div>
          <div className={classes.navDiv}>
            {navItems}
          </div>
        </div>
    );
  }
};

export default SideDrawer;
