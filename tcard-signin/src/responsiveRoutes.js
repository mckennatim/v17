import React from 'react'
const compoi = {}
compoi['Help'] = React.lazy(() => import('./components/Help.js'));
compoi['Connect'] = React.lazy(() => import('./components/Connect.js'));
compoi['UrApps'] = React.lazy(() => import('./components/UrApps.js'));
compoi['Splash'] = React.lazy(() => import('./components/Splash.jsx'));
compoi['Companies'] = React.lazy(() => import('./components/Companies.jsx'));

const multi={
  default: 'splash',
  urapps:[
    ['UrApps'],
    ['UrApps', 'Help'],
    ['UrApps', 'Connect', 'Help'],
  ],
  splash:[
    ['Splash'],
    ['Splash', 'Help'],
    ['Splash', 'Connect', 'Help'],
  ],
  cos:[
    ['Companies'],
    ['Companies', 'Help'],
    ['Companies', 'Connect', 'Help'],
  ],
  connect: [
    ['Connect'],
    ['Connect', 'Help'],
    ['Connect', 'UrApps', 'Help']
  ],
  help:[
    ['Help'],
    ['Connect', 'Help']
  ]
}

export{compoi, multi}