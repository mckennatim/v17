import React,{Suspense, useContext, useEffect, useState, lazy} from 'react';
import {AProvider, AContext} from '../contexts/acontext'
const compoi = {}
compoi['Help'] = React.lazy(() => import('./Help.jsx'));
compoi['Jobs'] = React.lazy(() => import('./Jobs.jsx'));
compoi['AddJob'] = React.lazy(() => import('./AddJob.jsx'));





const multi={
  jobs: [
    ['Jobs'],
    ['Jobs', 'Help'],
    ['Jobs', 'AddJob', 'Help']
  ],
  addjob:[
    ['AddJob'],
    ['AddJob', 'Jobs'],
    ['AddJob', 'Jobs', 'Help'],
  ]
}


const renderRWPrt = (multi, panes, path)=>{
  const key = Object
  .keys(multi)
  .filter((k)=>path==`/${k}`)
  const pages =multi[key]
  .filter((m)=>m.length==panes)[0]
  .map((n,i)=>{
    return React.createElement(compoi[n], {key:i}, null)
  })
  console.log('pages: ', pages)
  return(
    <div style ={styles.container} >
      {pages}
    </div>    
  )
}



// const renderHelp = ()=>{
//   return React.createElement(compoi['Help'], {key:1}, null)
// }



export const App=(props)=> {
  const {dev}=props
  console.log('APP RUN')
  console.log('window.location.hash: ', window.location.hash)
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
  console.log('CTRL RUN')
  console.log('window.location.hash: ', window.location.hash)
  const{title}=props
  const{devInfo, page, handlePage} = useContext(AContext)
  const{pane}=devInfo
  console.log('page: ', page)


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
      {renderRWPrt(multi, devInfo.panes, page)}
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