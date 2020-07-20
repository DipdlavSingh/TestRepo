import React from 'react'

import Aux from '../Auxiliary/Auxiliary'
import SideDrawer from '../../Componenets/Navigation/SideDrawer/SideDrawer'
import MainContent from '../../Containers/MainContent/MainContent'

import classes from './Layout.module.css'

const layout = (props) => {
  return (
      <div className={classes.Layout}>
        <SideDrawer/>
        <MainContent/>
      </div>
  );
};

export default layout;
