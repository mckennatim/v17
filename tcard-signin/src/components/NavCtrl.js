import React,{useContext} from 'react';
import {AContext} from '../contextA'
import ResponsivePages from  './ResponsivePages.js'
import {makeHref} from '../utilities/getCfg'


export const NavCtrl=(props)=>{
  const{title}=props
  const{devInfo, handleRoute} = useContext(AContext)
  const{panes}=devInfo
  const host =window.location.hostname
  const href = makeHref(host, 'signin', '#urapps')


  const renderNav = ()=>{
    return(
    <nav style ={styles.nav.nav}>
      <span> {title} {devInfo.dev} {panes} </span>
      <ul style ={styles.nav.ul}>
        <li style={styles.nav.li}><a href={href}>apps</a></li>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/connect')}>connect</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/urapps')}>urapps</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/splash')}>splash</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/registered')}>registered</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/help')}>help</a>
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