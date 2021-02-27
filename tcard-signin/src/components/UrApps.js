import React, { useContext, useEffect, useState } from "react";
import { AContext } from "../contextA";
import { parseQuery } from "../utilities/wfuncs";
import { ls, makeHref } from "../utilities/getCfg";
import { fetchApps } from "../fetches";

export default function UrApps(){
  const{token, history, workerInfo}=useContext(AContext)
  const[apps, setApps] = useState([])
  const[message,setMessage]=useState()
  const host = window.location.hostname

  useEffect(()=>{
    const search = history.location.search.slice(1)
    if(search){
      ls.setItem(parseQuery(search))
      history.replace({search:""})
    }
    fetchApps(token)
    .then((res)=>{
      console.log('res: ', res)
      if (res.qmessage){
        setMessage(res.qmessage)
        if (res.qmessage=="you dont exist! Try re-registering ") {
          setMessage(`Oops,${res.qmessage}At least, you are not connected to an active company so you have no apps to see`)
        }
      }else if (res.message){
        setMessage(res.message)
      }else{
        setMessage()
        const rapps = res
        .filter((f)=>!['signup', 'signin', 'books', 'co', 'connect'].includes(f.appid))
        .map((m)=>m.appid)
        setApps(rapps)
      }
    })
  },[token])

  const renderWinfo=()=>{
    if(workerInfo){
      return(
        <div>
          <h5>Signed in as:</h5>
          <span>id: {workerInfo.email}</span><br/>
          <span>co: {workerInfo.coid}</span><br/>
          <span>role: {workerInfo.role}</span><br/>
        </div>
      )
    }
  }

  const renderApps=()=>{
    if(message){
      return(
        <div>
          <p>{message} </p>
        </div>
      )
    }else{
      const applis = apps.map((a,i)=>{
        const href = makeHref(host,a)
        const img = `img/${a}.png`
        return(
          <li key={i} style={styles.myli.li}>
            <a href={href}>
              <div key={i}>
                <img src={img} alt={a} style={styles.myli.img}/> 
                <span style={styles.myli.span}>
                {a}
                </span>
              </div>
            </a>
          </li>
        )
      })
      return(
        <ul style={styles.myli.ul}>
          {applis}
        </ul>
      )
    }
  }

  return(
    <div style={styles.out}>
      <h4> JobCost PayTime Apps</h4>
      {renderWinfo()}
      {renderApps()}
    </div>
  )
}

const styles ={
  out:{
    background: "#99CCCC",
    height:"580px",
    padding: "8px"
  },
  myli :{
    span:{
      fontSize: "18px",
      color: "black"
    },
    img:{
      padding:'6px',
      width:'40px'
    },
    od:{
      overflow:'hidden',
      width: '100%',
      border: '1px solid #ccc'
    },
    ul:{
      textAlign: 'left',
      listStyleType: 'none',
      paddingLeft: '0px'
    },
    li:{
      background: '#f9f689',
      padding: '2px',
      overflow: 'hidden',
      border: 'solid 1px black',
      borderRadius: '6px'
    },
    idx:{
      float: 'left',
      width: '5%',
      padding: '4px'
    },
    icon:{
      fontSize: '18px'
    },
    ck:{
      transform: 'scale(1.5)',
      msTransform: 'scale(1.5)',
      WebkitTransform: 'scale(1.5)',
      padding: '10px',
      border: '2px solid black'
    },
    person:{
      padding: '3px',
      width: '50%',
      float: 'left',
      background: '#99CCCC'
    },
    cat:{
      padding: '3px',
      width: '20%',
      float: 'left',
      background: '#99CCCC'

    },
    act:{
      width: '10%',
      float: 'right',
      background: '#99CCCC'
    }
  }
}
