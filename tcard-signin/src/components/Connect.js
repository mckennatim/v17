// import { Divider } from 'muicss/react';
import React,{useEffect, useState} from 'react'
import { fetchConnect, fetchToken, putMail } from "../fetches";

export default function Help(){
  const [idx, setIdx]=useState(0)
  const[empData, setEmpData] = useState([])
  const[message, setMessage]=useState()
  const [token, setToken]=useState({key:'', value:{email:"", token:""}})
  const[isToken, setIsToken]=useState(false)

  useEffect(()=>{
    fetchConnect()
    .then((res)=>{
      // console.log('res: ', res)
      if (res.message){
        setMessage(res.message)
      }
      setEmpData(res.persons)
    })
  },[])

  const getToken = ()=>{
    const host = window.location
    console.log('host: ', host)
    const {coid,emailid,role}= empData[idx]
    fetchToken(coid,emailid,role)
    .then((res)=>{
      console.log('res: ', res)
      const {host, origin}= window.location
      let testUrl
      if (host=='localhost'){
        testUrl =`http://localhost/spa1/timecards/signin/v0/dist/#/urapps?email=${res.value.email}&token=${res.value.token}`
        res.testUrl=testUrl
      }else{
        testUrl =`${origin}/signup/#/?email=${res.value.email}&token=${res.value.token}`
        res.testUrl=testUrl
      }
      setIsToken(true)
      setToken(res)
    })
  }

  const sendMail=()=>{
    putMail({email:token.value.email, url:token.testUrl})
    .then((res)=>{
      console.log('res: ', res)
    })
  }

  const renderToken =()=>{
    // console.log('isToken: ', isToken)
    if(isToken){
      return(
        <div>
          <div>
            <p>{token.key} </p>
          </div>
          <div>
            {token.value.email} 
          </div>
          <div>
            {token.value.token} 
          </div>
          <a href={token.testUrl}>{token.testUrl}</a>
          <br/><br/><br/>
          <button onClick={sendMail}>sendmail</button>
        </div>
      )
    }else{
      return(
        <div>

        </div>
      )
    }
  }

  const render=()=>{
    if(message){
      return(
        <div>
          <p>{message} </p>
        </div>
      )
    }else{
      return(
        <div>
        <h3>Connect</h3>
        <p>
          Partner level workers can authenticate new users directly here by sending them an email link. Before you do make sure you have added this person to `persons` with an emailid, a role and marked as active
        </p>
        <select onChange={(e)=>setIdx(e.target.value)}>
          <option value="" key="0" >Select Email Id</option>
          {empData.map((r,j)=>{
            return (<option value={j} key={j+1}>{r.emailid}</option> )
          })}
        </select>
        {idx>=0 && <div><br/><br/><button onClick={getToken}>getToken</button><br/></div>}
        {renderToken()}
      </div>    
      )
    }
  }

  return(
    <div style={styles.out}>{render()}</div>
  )
}


const styles ={
  out:{
    background: "#99CCCC",
    height:"500px",
    padding: "8px"
  }
}

// https://timecards.sitebuilt.net/signup/#registered?email=mckenna.tim@gmail.com&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6InNpZ251cCIsImVtYWlsIjoibWNrZW5uYS50aW1AZ21haWwuY29tIn0.ELiuUtxsNbwNKcznaI07GoZXwdtbDqmRRR-P_kanI5g