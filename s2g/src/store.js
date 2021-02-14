// import {Splash} from './components'

const initState = {
  // test: {
  //   name: 'Harry',
  //   rtpg: Splash,
  //   users: ['doggy', 'freddy', 'timmy', 'kelly', 'brian' , 'david', 'colleen', 'megan', 'shaun', 'erin', 'doggy', 'freddy', 'timmy', 'kelly', 'brian' , 'david', 'colleen', 'megan', 'shaun', 'erin' ]
  // },
  cambio: {
    qconn:false,
    infocus: true,
    page: {
      name: 'Users', 
      params: {query:""},
      prups: {
        locdata:{
          sunrise:"06:00",
          sunset:"18:00", 
          tzadj: "00:00"
        },
        sched: [[0,0,0,0]],
        zinfo:[{id:'nada'}]
      }
    }
  },
  help:{
    allhelp:[]
  }
};

const initialBrowser = () => {
  let ws = window.innerWidth
  let devInfo ={
    types: ['watch', 'phone', 'phoneL', 'tablet', 'tabletL', 'laptop', 'monitor'],
    sizes: [300, 500, 600, 800, 900, 1800, 3000],
    browser: '',
    size: ws
  }
  var typeIdx
  devInfo.sizes.reduce((t, n, i)=>{
    if(t<ws&&ws<=n){typeIdx = i}
    return n
  },0);
  devInfo.browser = devInfo.types[typeIdx]
  return devInfo
}

initState.responsive = initialBrowser()
export {initState}
