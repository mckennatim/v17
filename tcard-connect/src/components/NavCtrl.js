import React,{useContext} from 'react';
import {AContext} from '../contexts/acontext'
import ResponsivePages from  './ResponsivePages.js'
import {makeHref} from '../utilities/getCfg'

const appid = 'connect'

export const NavCtrl=(props)=>{
  const{title}=props
  const{devInfo, path, handlePath, setAppid} = useContext(AContext)
  const{panes}=devInfo
  const host =window.location.hostname
  const href = makeHref(host, 'signup', '#urapps')

  setAppid(appid)

  const renderNav = ()=>{
    return(
    <nav style ={styles.nav.nav}>
      <span> {title} {devInfo.dev} {panes} </span>
      <ul style ={styles.nav.ul}>
        <li style={styles.nav.li}><a href={href}>apps</a></li>
        <li style ={styles.nav.li}>
          <a onClick={handlePath('/connect')}>connect</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handlePath('/help')}>help</a>
        </li>
      </ul>
    </nav>
    )
  }

  return(
  <div> 
    {renderNav()}
    <ResponsivePages/>
  </div>    
  )
}


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