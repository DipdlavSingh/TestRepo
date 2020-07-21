import React from 'react'

// import Aux from '../Auxiliary/Auxiliary'
import SideDrawer from '../../Componenets/Navigation/SideDrawer/SideDrawer'
import MainContent from '../../Containers/MainContent/MainContent'

import classes from './Layout.module.css'

const layout = (props) => {
  return (
      <div className={classes.Layout+'container'}>
        <div className='row' style={{margin: 'auto'}}>
          <SideDrawer/>
          <MainContent/>
        </div>
      </div>
  );
};

export default layout;
