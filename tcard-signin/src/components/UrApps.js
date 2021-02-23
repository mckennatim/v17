import React, { useContext, useEffect, useState } from "react";
import { AContext } from "../contextA";
import { parseQuery } from "../utilities/wfuncs";
import { ls } from "../utilities/getCfg";
import { fetchApps } from "../fetches";

export default function UrApps(){
  const{token, history}=useContext(AContext)
  const[apps, setApps] = useState([])
  const[message,setMessage]=useState()

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
          setMessage(`Oops,${res.qmessage}At least, you are not connected to a company so you have no apps to see`)
        }
      }else if (res.message){
        setMessage(res.message)
      }else{
        setMessage()
        const rapps = res
        .filter((f)=>!['signup', 'signin', 'books', 'co'].includes(f.appid))
        .map((m)=>m.appid)
        setApps(rapps)
      }
    })
  },[token])

  const renderApps=()=>{
    if(message){
      return(
        <div>
          <p>{message} </p>
        </div>
      )
    }else{
      const applis = apps.map((a,i)=>{
        return(
          <li key={i}>
            {a}
          </li>
        )
      })
      return(
        <ul>
          {applis}
        </ul>
      )
    }
  }

  return(
    <div style={styles.out}>
      <h4>
        in urapps
      </h4>
      {renderApps()}
    </div>
  )
}

const styles ={
  out:{
    background: "#99CCCC",
    height:"500px",
    padding: "8px"
  }
}
