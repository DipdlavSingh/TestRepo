import React from 'react';

import classes from './InfoBar.module.css';
import InfoComp from '../InfoComp/InfoComp';

const infoBar = (props) => {

  return(
      <div className={classes.InfoBar+' row'}>
        <div className={classes.infoSubDiv+' col-md-4'}>
          <div className={classes.InfoBar+' row'}>
            <InfoComp
              data1='13,233'
              data2={'5'}
            />
          </div>
          <div className={classes.InfoBar+' row'}>
            <InfoComp
                data1={'12,998'}
                data2={'-3'}
            />
          </div>
        </div>

        <div className={classes.infoSubDiv+' col-md-8'}>
          <div style={{height:'100%'}} className={classes.InfoBar+' row'}>
            <InfoComp graph={true}/>
          </div>
        </div>
      </div>
  )
};

export default infoBar;
