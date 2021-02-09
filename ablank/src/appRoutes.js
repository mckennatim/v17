import React,{lazy} from 'react'
const compoi = {}
compoi['Help'] = React.lazy(() => import('./components/Help.jsx'));
compoi['Jobs'] = React.lazy(() => import('./components/Jobs.jsx'));
compoi['AddJob'] = React.lazy(() => import('./components/AddJob.jsx'));

const multi={
  default: 'jobs',
  jobs: [
    ['Jobs'],
    ['Jobs', 'Help'],
    ['Jobs', 'AddJob', 'Help']
  ],
  addjob:[
    ['AddJob'],
    ['AddJob', 'Jobs'],
    ['AddJob', 'Jobs', 'Help'],
  ],
  help:[
    ['Help'],
  ]
}

export{compoi, multi}