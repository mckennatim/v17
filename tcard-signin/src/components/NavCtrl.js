import React,{useContext, useState} from 'react';
import {AContext} from '../contextA'
import ResponsivePages from  './ResponsivePages.js'
import {cfg} from '../utilities/getCfg'


export const NavCtrl=(props)=>{
  const{title}=props
  const{ handleRoute, workerInfo} = useContext(AContext)

  // const renderWinfo=()=>{
  //   let winfo=''
  //   if(workerInfo){
  //     winfo = `${workerInfo.coid}, ${workerInfo.email.split('@')[0]}, ${workerInfo.role}`
  //   }
  //   return(
  //     <span>
  //       {winfo}
  //     </span>
  //   )
  // }


  const renderNav = ()=>{
    return(
    <nav style ={styles.nav.banner}>
      <span> {title} </span>
      <ul style ={styles.nav.ul}>
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/splash')}>home</a>
        </li>        
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/urapps')}>apps</a>
        </li>

        
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/cos')}>companies</a>
        </li>
        {workerInfo && workerInfo.role=='partner' && 
        <li style ={styles.nav.li}>
          <a onClick={handleRoute('/connect')}>connect</a>
        </li>
        }
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
  <div style ={styles.nav.banner}> 
    {renderNav()}
    <ResponsivePages/>
  </div>    
  )
}


const styles ={
  nav: {
    banner:{
      background: "#bad7d8"
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
}