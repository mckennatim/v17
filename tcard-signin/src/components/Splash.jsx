import React, { useContext } from "react";
import { AContext } from "../contextA";
import { lsa, cfg } from "../utilities/getCfg";

export default function Splash(){
  const{token, handleRoute}=useContext(AContext)
  console.log('token: ', token)

  const render = ()=>{
    if(token){
      return(
        <button onClick={handleRoute('/urapps')}>
          This machine is registered,click to go to your apps
        </button>
      )
    }else {
      if(lsa.itemStr){
        return(
          <button onClick={handleRoute('/cos')}>
            You are not connected to a company on this machine. click to go to companies
          </button>
        )
      }else{
        return(
          <button onClick={window.location.href=cfg.url.authqry} >
            You are not registered on this machine, Click to register
          </button>
        )
      }
    }
  }

  return(
    <div style={styles.out}>
      <h4>
        Jobcost PayTime
      </h4>
      {render()}
      <div style={style.container}>
        <div style={style.content}>
          <img src='img/screen1a.png' alt={'a'} style={style.img}/> 
        </div>
        <div style={style.content}>
          <img src='img/screen2c.png' alt={'b'} style={style.img}/> 
        </div>
        <div style={style.content2}>
          <div style={style.outer} >
          <h3> JobCost-PayTime suite</h3>
            <h4>Easy timecard and jobcost entry in the field</h4>
            <p>Mobile first design for quick data entry on phones tablet or laptop. Continuous updating to server every time you punch in or out.</p> 
            <h4>Payroll, Monthly and 941 Withholding</h4>
            <p>Accrued taxes and benefits reporting each pay period.</p>
            <h4>You own your data</h4>
            <p>You can delete from our servers or make a copy any time. Company info and personnel files are always available to you as are all general ledger journal entries</p>
            <h4>Jobcost Reporting</h4>
            <p>Labor costs for all jobs and categories within jobs are updated each week when you run payroll. See up to the minute reports on job cost labor vs estimate/contract labor with all employer witholding, insurance and benefit costs factored in.</p>
        </div>

          </div>
        <div style={style.content}>
          <h2>Try it Now</h2>
          <span>Beta testing is just starting. Eventually it will cost something maybe in the area of $50-$60/ month for a small business with under 10 people getting paid.</span><br/>
          
        </div>
      </div>

    </div>
  )
}

const styles ={
  out:{
    background: "#99CCCC",
    height:"500px",
    padding: "8px"
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    textAlign: 'center',
  },
}

const style = {
  outer:{
    background: '#99CCFF',
    overflow:'hidden',
    // padding: '4px',
    // margin: '2px 10px 10px 10px'
  },
  img:{
    // margin: '6px',
    // border: '6px solid #99CCFF',
    width: '100%'
  },
  appbar:{
    background: '#464E8C',
    color:'black'
  },  
  container:{
    background: '#CCCCCC',
    display: 'flex',
    flexDirection: 'row', /* generally better */
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'stretch',
    alignItems: 'stretch'
  },
  content:{
    padding: '8px',
    minHeight:'200px',
    background: '#99CCFF',
    flexGrow: 1,
    flexShrink: 1, /*can shrink from 300px*/
    flexBasis: '225px'  
  },
  content2:{
    padding: '8px',
    minHeight:'200px',
    background: '#99CCFF',
    flexGrow: 2,
    flexShrink: 1, /*can shrink from 300px*/
    flexBasis: '450px'  
  }
}