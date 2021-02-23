import React,{useContext} from 'react';
import {AContext} from '../contextA'
import ResponsivePages from  './ResponsivePages.js'
import {cfg} from '../utilities/getCfg'


export const NavCtrl=(props)=>{
  const{title}=props
  const{devInfo, handleRoute} = useContext(AContext)
  const{panes}=devInfo


  const renderNav = ()=>{
    return(
    <nav style ={styles.nav.nav}>
      <span> {title} {devInfo.dev} {panes} </span>
      <ul style ={styles.nav.ul}>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/urapps')}>apps</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/splash')}>splash</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/cos')}>cos</a>
        </li>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/connect')}>connect</a>
        </li>
        <li style={styles.nav.li}
          ><a href={cfg.url.authqry}>register</a>
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