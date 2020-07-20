import React, {Component} from 'react'

import classes from './Header.module.css'

import InfoComp from './InfoComp/InfoComp'

class Header extends Component {
  render() {
    return (
        <div className={classes.Header+' container'}>
          <div className={classes.headerRow+'row'}>
            <input placeholder='Search'/>
            <div style={{float:'right'}}>
              <span className={classes.icon+" material-icons"}>notifications_none</span>
              <span className={classes.icon+" material-icons"}>not_listed_location</span>
            </div>

          </div>

          <div className={classes.headerRow+' row'}>
            <div className={'col-md-3'}>
              <h3><strong>HOME</strong><span className={classes.icon+" material-icons"}>home</span></h3>
            </div>
            <div className={'col-md-9'}>
              <p>Home - Dashboard</p>
            </div>
          </div>

          <div className={classes.headerRow+' row'}>
            <div className={'col-md-4'}>
              <div className={'row'}>
                <InfoComp/>
              </div>
              <div className={'row'}>
                <InfoComp/>
              </div>
            </div>
            <div className={'col-md-8'}>
              <InfoComp/>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
