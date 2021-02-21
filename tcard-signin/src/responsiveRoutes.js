import React from 'react'
const compoi = {}
compoi['Help'] = React.lazy(() => import('./components/Help.js'));
compoi['Connect'] = React.lazy(() => import('./components/Connect.js'));
compoi['UrApps'] = React.lazy(() => import('./components/UrApps.js'));
compoi['Splash'] = React.lazy(() => import('./components/Splash.jsx'));
compoi['Registered'] = React.lazy(() => import('./components/Registered.jsx'));

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
  registered:[
    ['Registered'],
    ['Registered', 'Help'],
    ['Registered', 'Connect', 'Help'],
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