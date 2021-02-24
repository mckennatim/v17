import React, { useEffect, useState, useContext } from "react";
import { parseQuery } from "../utilities/wfuncs";
import { lsa } from "../utilities/getCfg";
import { AContext } from "../contextA";
import { fetchCoids, fetchTcardToken } from "../fetches";
import { ls } from "../utilities/getCfg";




export default function Companies(){
  const{history, setToken, setWorkerInfo}=useContext(AContext)
  const [cos, setCos] =useState([])
  const[message, setMessage]=useState()
  const[getTokenMessage, setGetTokenMessage]=useState()
  const today = new Date()


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
        ls.setItem()
        setToken()
        setWorkerInfo()
      }else if(res.message){
        setGetTokenMessage(res.message)
        ls.setItem()
        setToken()
        setWorkerInfo()
      }else{
        setGetTokenMessage()
        const lsobj={email:res.binfo.emailid, token:res.token, firstday:res.firstday, coid:res.binfo.coid, role:res.binfo.role}
        console.log('lsobj: ', lsobj)
        ls.setItem(lsobj)
        setToken(lsobj.token)
        setWorkerInfo(lsobj)
      }
    })
  }

  const getLiStyle=(co)=>{
    const listyle = {
      li:{
        background: '#99CCCC',
        padding: '6px',
        overflow: 'hidden',
        border: 'solid 1px black'
      },
      divgt:{
        float:'right'
      },
      divbu:{
        float:'right'
      },
      message: 'co. enrolled til: ',
      showbut: false    
    }
    const gtil = new Date(co.goodtil)
    if(gtil< today){
      listyle.li.background='#ede8af'
      listyle.message = 'reg. expired on: '
      if(co.role=='partner'){
        listyle.showbut = true
      }
    }
    return listyle
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
      const coLis = cos.map((co,i)=>{
        const listyle = getLiStyle(co)
        return(
          <li style={listyle.li} key={i} onClick={getToken(co)}>
            <span idx={i} style={{fontWeight:'bold'}}>{co.coid} </span>
            <span idx={i}>as {co.role}</span>
            <div idx={i} style={listyle.divgt}>{listyle.message} {co.goodtil.split('T')[0]}</div>
          </li>
        )
      })
      return(
        <div>
          <ul style={style.myli.ul}>
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
    height:"580px",
    padding: "8px"
  }
}

const style = {
  he:{
    overflow:'hidden',
    padding: '6px',
    margin: '2px 10px 10px 10px',
    yw:{
      padding: '1px 1px 10px 1px'
    },
    yr:{
      width: '45px',
      background: 'silver'
    },
    wk:{
      width:'36px',
      background: 'whitesmoke'
    },
    img:{
      
      float:'right',
      width: '30px'
    },
    act:{
      float: 'right'
    },
    get:{
      float:'left'
    },
    but:{
      ac:{
        margin: '4px',
        padding: '4px'
      },
      ia:{
        margin: '4px',
        padding: '4px'
      },
      al:{
        margin: '4px',
        padding: '4px'
      }
    },
  },
  myli :{
    od:{
      overflow:'hidden',
      width: '100%',
      border: '1px solid #ccc'
    },
    ul:{
      textAlign: 'left',
      listStyleType: 'none',
      padding:'0px'
    },
    li:{
      background: '#99CCCC',
      padding: '6px',
      overflow: 'hidden',
      border: 'solid 1px black'
    },
    idx:{
      float: 'left',
      width: '7%',
      padding: '5px'
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
    job:{
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
