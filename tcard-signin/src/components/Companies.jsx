import React, { useEffect, useState, useContext } from "react";
import { parseQuery } from "../utilities/wfuncs";
import { lsa } from "../utilities/getCfg";
import { AContext } from "../contextA";
import { fetchCoids, fetchTcardToken } from "../fetches";
import { ls } from "../utilities/getCfg";




export default function Companies(){
  const{history}=useContext(AContext)
  const [cos, setCos] =useState([])
  const[message, setMessage]=useState()
  const[getTokenMessage, setGetTokenMessage]=useState()


  useEffect(()=>{
    const search = history.location.search.slice(1)
    if(search){
      lsa.setItem(parseQuery(search))
      history.replace({search:""})
    }
    fetchCoids()
    .then((res)=>{
      console.log('res: ', res)
      if (res.qmessage){
        setMessage(res.qmessage)
        if (res.qmessage=="you dont exist! ") {
          setMessage(`Oops,${res.qmessage}At least, you are not registered on this device. We have no record of you on this device.`)
        }
      }
      if (res.message){
        setMessage(res.message)
      }
      setCos(res.coid)
    })
  },[])

  const getToken=(m)=>()=>{
    console.log('m: ', m)
    fetchTcardToken(m.coid)
    .then((res)=>{
      console.log('res: ', res)
      if (res.qmessage){
        setGetTokenMessage(res.qmessage)
      }else if(res.message){
        setGetTokenMessage(res.message)
      }else{
        setGetTokenMessage()
        const lsobj={email:res.binfo.emailid, token:res.token, firstday:res.firstday}
        console.log('lsobj: ', lsobj)
        ls.setItem(lsobj)
      }
    })
  }

  const renderGetTokenMessage =()=>{
    console.log('getTokenMessage: ', getTokenMessage)
    if(getTokenMessage){
      return(
        <div>
          <p>Selected company isnt current. Contact one of the partners.</p>
        </div>
      )
    }
  }

  const renderCos=()=>{
    if(message){
      return(
        <div>
          <p>{message} </p>
        </div>
      )
    }else{
      const coLis = cos.map((m,i)=>{
        return(
          <li key={i} onClick={getToken(m)}>{m.coid} {m.role}</li>
        )
      })
      return(
        <div>
          <ul>
            {coLis}
          </ul>
          {renderGetTokenMessage()}
        </div>
      )
    }
  }

  return(
    <div style={styles.out}>
      <h4>
        Your registered Companies
      </h4>
      {renderCos()}
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
