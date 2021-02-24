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
    ['UrApps', 'Companies'],
    ['UrApps', 'Companies', 'Help'],
  ],
  splash:[
    ['Splash'],
    ['Splash', 'Companies'],
    ['Splash', 'UrApps', 'Companies'],
  ],
  cos:[
    ['Companies'],
    ['Companies', 'UrApps'],
    ['Companies', 'UrApps', 'Splash'],
  ],
  connect: [
    ['Connect'],
    ['Connect', 'Help'],
    ['Connect', 'UrApps', 'Help']
  ],
  help:[
    ['Help'],
    ['Help', 'UrApps'],
    ['Help', 'Companies', 'UrApps']
  ]
}

export{compoi, multi}