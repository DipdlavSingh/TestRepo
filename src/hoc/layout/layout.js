import React from 'react'

import Aux from '../Auxiliary/Auxiliary'
import SideDrawer from '../../Componenets/Navigation/SideDrawer/SideDrawer'

const layout = (props) => {
  return (
      <Aux>
        <SideDrawer/>
        <MainContent/>
      </Aux>
  );
};

export default layout;
