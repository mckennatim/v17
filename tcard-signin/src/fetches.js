import {ls, lsa, lsb, cfg} from './utilities/getCfg'
import {geta} from './utilities/wfuncs'

const fetchConnect=()=>{
  if(ls.isToken()){
    let url= cfg.url.api+'/persons/connect/'
    let options= {
      headers: {'Authorization': 'Bearer '+ ls.getItem().token},
      method: 'GET'
    }
    return(
      fetch(url, options)
        .then((response)=>response.json())
        .then((json)=>json)
        .catch((e)=>{
          return {qmessage: e.message}
        })
      )         
  }else{
    let p2 =Promise.resolve({qmessage:'you do not seem to be known on this device '})
    return p2
  }
}

const fetchToken=(coid,emailid,role)=>{
  if(ls.isToken()){
    let url= `${cfg.url.api}/persons/etoken/${coid}/${emailid}/${role}`
    let options= {
      headers: {'Authorization': 'Bearer '+ ls.getItem().token},
      method: 'GET'
    }
    return(
      fetch(url, options)
        .then((response)=>response.json())
        .then((json)=>json)
        .catch((e)=>{
          return {qmessage: e.message}
        })
      )         
  }else{
    let p2 =Promise.resolve({qmessage:'you do not seem to be known on this device '})
    return p2
  }
}

const fetchTcardToken=(coid)=>{
  if(lsa.isToken()){
    let url= `${cfg.url.api}/reg/tcardtoken/${coid}`
    let options= {
      headers: {'Authorization': 'Bearer '+ lsa.getItem().token},
      method: 'GET'
    }
    return(
      fetch(url, options)
        .then((response)=>response.json())
        .then((json)=>json)
        .catch((e)=>{
          return {qmessage: e.message}
        })
      )         
  }else{
    let p2 =Promise.resolve({qmessage:'you do not seem to be known on this device '})
    return p2
  }
}

const putMail=(obj)=>{
  console.log(JSON.stringify(obj))
  if(ls.isToken){
    let url= cfg.url.api+'/persons/sendmail/'
    let options= {
      headers: {'Authorization': 'Bearer '+ ls.getItem().token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(obj)
    }
    return(
      fetch(url, options)
        .then((response)=>response.json())
        .then((json)=>json)
        .catch((e)=>{
          return {qmessage: e.message}
        })
      )         
  }else{
    let p2 =Promise.resolve({qmessage:'you do not seem to be known on this device '})
    return p2
  }
}

const fetchCoids=()=>{
  if(lsa.isToken()){
    let url= cfg.url.api+'/reg/coids'
    let options= {headers: {'Authorization': 'Bearer '+ lsa.getItem().token}}
    return(
      fetch(url, options)
        .then((response)=>response.json())
        .then((json)=>{
          console.log('json: ', json)
          if(json.message){
            return {qmessage: json.message}
          }else{
            return json
          }
        })
        .catch((e)=>{
          return {qmessage: e.message}
        })
      )         
  }else{
    let p2 =Promise.resolve({qmessage:'you dont exist! '})
    return p2
  }
}

const fetchApps=(token)=>{
  if(token){
    let url= cfg.url.api+'/reg/apps'
    let options= {headers: {'Authorization': 'Bearer '+ token}}
    return(
      fetch(url, options)
        .then((response)=>response.json())
        .then((json)=>json)
        .catch((e)=>{
          return {qmessage: e.message}
        })
      )         
  }else{
    let p2 =Promise.resolve({qmessage:'you dont exist! Try re-registering '})
    return p2
  }
}


export{fetchConnect, fetchToken, putMail, fetchCoids, fetchApps, fetchTcardToken}

