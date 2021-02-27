import React from 'react'
const compoi = {}
compoi['Help'] = React.lazy(() => import('./components/Help.js'));
compoi['JobCost'] = React.lazy(() => import('./components/JobCost.js'));
compoi['AddJob'] = React.lazy(() => import('./components/AddJob.js'));

const multi={
  default: 'jobcost',
  jobcost: [
    ['JobCost'],
    ['JobCost', 'AddJob'],
    ['JobCost', 'AddJob', 'Help']
  ],
  help:[
    ['Help'],
    ['Help', 'JobCost']
  ],
  addjob:[
    ['AddJob'],
    ['AddJob', 'JobCost'],
    ['AddJob', 'JobCost', 'Help'],
  ],
}

export{compoi, multi}