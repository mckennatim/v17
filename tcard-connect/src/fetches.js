import {ls, cfg} from './utilities/getCfg'
import {geta} from './utilities/wfuncs'

const fetchConnect=(appid)=>{
  var lsh = ls.getItem();
  if(geta('lsh.token', lsh)){
    let url= cfg.url.api+'/persons/connect/'
    let options= {
      headers: {'Authorization': 'Bearer '+ lsh['token']},
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
  var lsh = ls.getItem();
  if(geta('lsh.token', lsh)){
    let url= `${cfg.url.api}/persons/etoken/${coid}/${emailid}/${role}`
    let options= {
      headers: {'Authorization': 'Bearer '+ lsh['token']},
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
  var lsh = ls.getItem();
  console.log(JSON.stringify(obj))
  if(geta('lsh.token', lsh)){
    let url= cfg.url.api+'/persons/sendmail/'
    let options= {
      headers: {'Authorization': 'Bearer '+ lsh['token'],
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


export{fetchConnect, fetchToken, putMail}

