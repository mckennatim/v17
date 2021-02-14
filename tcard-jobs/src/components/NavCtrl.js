import React,{useState, useEffect, useContext} from 'react';
import {fetchSettings} from '../fetches'
import ResponsivePages from  './ResponsivePages.js'
import {AContext} from '../contexts/acontext'

function NavCtrl(props) {
  const{title}=props
  const{devInfo, handlePath} = useContext(AContext)
  const{panes}=devInfo

  const[, settings]= useState({})
  
  useEffect(()=>{
    getSettings()
  },[])

  const getSettings=()=>{
    fetchSettings()     
      .then((res)=>{
        settings({firstday: res.firstday, coid: res.coid, qmessage:res.qmessage, task:'jobs'})
      })
  }

  const renderNav =()=>{
    return(
      <nav style ={styles.nav.nav}>
        <span> {title} {devInfo.dev} {panes} </span>
        <ul style ={styles.nav.ul}>
          <li style ={styles.nav.li}>
            <a onClick={handlePath('/jobs')}>jobs</a>
          </li>
          <li style ={styles.nav.li}>
            <a onClick={handlePath('/addjob')}>addjob</a>
          </li>
          <li style ={styles.nav.li}>
            <a onClick={handlePath('/help')}>help</a>
          </li>
        </ul>
      </nav>
      )
  }
  
  return (
    <div>
      {renderNav()}
      <ResponsivePages/>
    </div>
  );
}
export{NavCtrl}

const styles ={
  nav: {
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
}
