import React, {Component} from 'react'

import classes from './Header.module.css'

class Header extends Component {
  render() {
    return (
        <div className={classes.Header}>
          <div>
            <input placeholder='Search'/>
            <span className="material-icons">notifications_none</span>
            <span className="material-icons">not_listed_location</span>
          </div>
          <div>
            
          </div>
        </div>
    );
  }
}

export default Header;
