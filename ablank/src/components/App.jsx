import React,{Suspense, useContext, useEffect, useState, lazy} from 'react';
import {AProvider, AContext} from '../contexts/acontext'
const compoi = {}
compoi['Help'] = React.lazy(() => import('./Help.jsx'));
compoi['Jobs'] = React.lazy(() => import('./Jobs.jsx'));
compoi['AddJob'] = React.lazy(() => import('./AddJob.jsx'));
import responsive from '../responsive'




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
    ['Jobs', 'Help']
  ]
}


let sb = []
let sd=[]

const nextBest =(arr, panes)=>{
  const sa= arr.filter((a)=>a.length == panes)
  console.log('sa: ', sa, sa.length)
  if(sa.length>0) {
    console.log('sa: ', sa)
    sd = sa
    return sa
  } else {
    console.log('arr,panes-1: ', arr,panes-1)
    nextBest(arr, panes-1)
  }
}

nextBest(multi['help'], 3)
console.log(sd)

const rert = (ar) => {
  const pgs = ar.map((a,i)=>{
    return React.createElement(compoi[a], {key:i}, null)
  })
  return pgs
}

console.log('rert(sd): ', rert(sd[0]))

const renderRWPrtX = (multi, panes, path)=>{
  let key = Object
  .keys(multi)
  .filter((k)=>path==`/${k}`)
  if( key.length ==0){key=multi.default}
  const pages =multi[key]
  .filter((m)=>m.length==panes)[0]
  .map((n,i)=>{
    return React.createElement(compoi[n], {key:i}, null)
  })
  return(
    <div style ={styles.container} >
      {pages}
    </div>    
  )
}


const renderRWPrt = (multi, panes, path)=>{
  let key = Object
  .keys(multi)
  .filter((k)=>path==`/${k}`)
  if( key.length ==0){key=multi.default}
  // let sd=[]
  nextBest(multi[key], 3)
  console.log('sd: ', sd)
  // .filter((m)=>m.length==panes)[0]
  // .map((n,i)=>{
  //   return React.createElement(compoi[n], {key:i}, null)
  // })
  // return(
  //   <div style ={styles.container} >
  //     {pages}
  //   </div>    
  // )
}

//renderRWPrt(multi, 3, 'help')


// const renderHelp = ()=>{
//   return React.createElement(compoi['Help'], {key:1}, null)
// }



export const App=(props)=> {
  const {dev}=props
  // const[page, setPage] = useState()
  const{title}=props

  return (
    <AProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Ctrl title={title}/>
        </div>
      </Suspense>
    </AProvider>
  );
}

const Ctrl=(props)=>{
  const{title}=props
  const{devInfo, page, handlePage} = useContext(AContext)
  const{pane}=devInfo


  const renderNav = ()=>{
    return(
    <nav style ={styles.nav.nav}>
      <span> {title} {devInfo.dev} {devInfo.panes} </span>
      <ul style ={styles.nav.ul}>
        <li style ={styles.nav.li}>
          <a onClick={handlePage('/jobs')}>jobs</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handlePage('/addjob')}>addjob</a>
        </li>
        {/* <li style ={styles.nav.li}>
          <a onClick={handlePage('/help')}>help</a>
        </li> */}
      </ul>
    </nav>
    )
  }

  

  // renderRWPrt(multi, devInfo.panes, page)

  // const renderContent=()=>{
  //   console.log('page: ', page)
  //   if (page=='/addjob'){
  //     return(
  //       <div style ={styles.container}>
  //         <AddJob/>
  //       </div>
  //     )
  //   }
  //   if (page=='/jobs' || page==undefined){
  //     console.log('default is /jobs')
  //     return(
  //       <div style ={styles.container} >
  //         <Jobs/>
  //         <Help/>
  //       </div>
  //     )
  //   }
  //   if (page=='/both'){
  //     return(
  //       <div style ={styles.container}>
  //         <Jobs/>
  //         <AddJob/>
  //         <Help/>
  //       </div>
  //     )
  //   }
  // }



  return(
  <div> 
    {renderNav()}
    <Suspense fallback={<div>Loading...</div>}>  
      {/* {rert(sd[0])} */}
      {renderRWPrtX(multi, devInfo.panes, page)}
      {/* {responsive(multi,devInfo.panes,page.substr(1),compoi)} */}
    </Suspense>
  </div>    
  )
}



const adata = {
  afJobs: [],
  aJob2Edit:''
}

const styles ={
  page:{
    backgroundColor: '#aa9898'
  },
  container:{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    backgroundColor: '#ece6ed'
  },
  nav: {
    nav:{
      backgroundColor: 'whitesmoke',
    },
    ul:{
      textAlign: 'left',
      listStyleType: 'none',
      paddingLeft: '12px'
    },
    li:{
      display: 'inline',
      padding: '2px',
      paddingRight: '4px',
      background: 'whitesmoke'
    },
  },
  jobs:{
    div0:{
      backgroundColor: '#aa9898'
    }
  },
  addjob:{
    div0:{
      backgroundColor: '#c6a7a7'
    }
  },
  help:{
    div0:{
      backgroundColor: '#c7b1c9'
    }
  }
}