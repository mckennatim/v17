import React,{Suspense, useContext, useEffect, useState, lazy} from 'react';
import {AProvider, AContext} from '../contexts/acontext'
import responsive from '../responsive'

// const multi={
//   default: 'jobs',
//   jobs: [
//     ['Jobs'],
//     ['Jobs', 'Help'],
//     ['Jobs', 'AddJob', 'Help']
//   ],
//   addjob:[
//     ['AddJob'],
//     ['AddJob', 'Jobs'],
//     ['AddJob', 'Jobs', 'Help'],
//   ],
//   help:[
//     ['Help'],
//   ]
// }

export const App=(props)=> {
  const {dev}=props
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
        <li style ={styles.nav.li}>
          <a onClick={handlePage('/help')}>help</a>
        </li>
      </ul>
    </nav>
    )
  }

  return(
  <div> 
    {renderNav()}
    {responsive(devInfo.panes,page)}
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