import React,{useState, useEffect, useContext} from 'react';
import {fetchSettings} from '../fetches'
import ResponsivePages from  './ResponsivePages.js'
import {AContext} from '../contexts/acontext'
import {makeHref} from '../utilities/getCfg'

const appid ='jobs'

function NavCtrl(props) {
  const{title}=props
  const{devInfo, handlePath} = useContext(AContext)
  const{panes}=devInfo

  const host =window.location.hostname
  const href = makeHref(host, 'signup', '#urapps')
  const tcardhref = makeHref(host, 'tcard', '#tcard')

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
          <li style={styles.li}><a style={styles.a} href={href}>apps</a></li>
          <li style={styles.li}><a style={styles.a} href={tcardhref}>tcard</a></li>
          <li style ={styles.li}>
            <a style={styles.a} onClick={handlePath('/jobs')}>jobs</a>
          </li>
          <li style ={styles.li}>
            <a style={styles.a} onClick={handlePath('/addjob')}>addjob</a>
          </li>
          <li style ={styles.li}>
            <a style={styles.a} onClick={handlePath('/help')}>help</a>
          </li>
        </ul>
      </nav>
      )
  }
  
  return (
    <div>
      {renderNav()}
      <ResponsivePages appid={appid}/>
    </div>
  );
}
export{NavCtrl}

const styles ={
  li:{
    display: 'inline',
    padding: '2px',
    paddingRight: '4px',
    background: 'whitesmoke'
  },
  a:{
    textDecoration: 'none',
    color: 'green'    
  },
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
