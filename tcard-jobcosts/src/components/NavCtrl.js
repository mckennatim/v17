import React,{useContext} from 'react';
import ResponsivePages from  './ResponsivePages.js'
import {AContext} from '../contextA'
import {makeHref} from '../utilities/getCfg'

function NavCtrl(props) {
  const{title}=props
  const{devInfo, handlePath, appid} = useContext(AContext)
  const{panes}=devInfo

  const host =window.location.hostname
  const href = makeHref(host, 'signup', '#urapps')
  const tcardhref = makeHref(host, 'tcard', '#tcard')

  const renderNav =()=>{
    return(
      <nav style ={styles.nav.nav}>
        <span> {title} {devInfo.dev} {panes} </span>
        <ul style ={styles.nav.ul}>
          <li style={styles.li}><a style={styles.a} href={href}>apps</a></li>
          <li style={styles.li}><a style={styles.a} href={tcardhref}>tcard</a></li>
          <li style ={styles.li}>
            <a style={styles.a} onClick={handlePath('/jobcost')}>jobcost</a>
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
