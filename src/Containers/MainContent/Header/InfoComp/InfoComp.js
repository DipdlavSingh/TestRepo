import React from 'react'

import classes from './InfoComp.module.css'
import Chart from 'react-google-charts'


const infoComp = (props) => {
  let color = '#F53C56';
  let rotate = 'rotate(75deg)';
  if (+props.data2 > 0) {
    color = '#2DCE98';
    rotate = 'rotate(0deg)'
  }

  let outputData =
      <div className={classes.InfoComp}>
        <div className={[classes.data1, classes.data].join(' ')}>
          <p className={classes.label}>Total Users</p>
          <p className={classes.value}>{props.data1}</p>
        </div>
        <div className={[classes.symbol, classes.data].join(' ')}>
          <span style={{backgroundColor: color, transform: rotate}}
                className={classes.icon + " material-icons"}>show_chart</span>
        </div>
        <div className={[classes.data2, classes.data].join(' ')}>
          <p className={classes.bottomText}>
            <span style={{color: color}}>{props.data2}% </span>since last month.
          </p>
        </div>
      </div>;

  if (props.graph) {
    outputData =
        <div className={classes.InfoComp}>
          <div style={{margin:'auto',textAlign:'right!important'}}>
            <button className={classes.chartButton}>Month</button>
          </div>
          <div style={{margin:'auto'}}>
            <Chart
                width={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['x', 'profit'],
                  [0, 0],
                  [1, 5],
                  [2, 15],
                  [3, 9],
                  [4, 10],
                  [5, 5],
                  [6, 3],
                  [7, 19],
                ]}
                options={{
                  hAxis: {
                    title: 'Time',
                  },
                  vAxis: {
                    title: 'Profit',
                  },
                  curveType: 'function',
                  colors:['#7764E4'],
                  title: 'User Data'
                }}
                rootProps={{'data-testid': '2'}}
            />
          </div>

        </div>
  }

  return outputData
};

export default infoComp;
