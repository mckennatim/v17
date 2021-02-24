import {ls, cfg} from './utilities/getCfg'
import {geta} from './utilities/wfuncs'

const fetchHelp=(appid, token)=>{
  if(token){
    let url= cfg.url.api+'/common/help/'+appid
    let options= {
      headers: {'Authorization': 'Bearer '+ token},
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

const putVote=(appid,vote)=>{
  console.log(JSON.stringify({vote:vote}))
  if(ls.isToken()){
    let url= cfg.url.api+'/common/help/vote/'+appid
    let options= {
      headers: {'Authorization': 'Bearer '+ ls.getToken(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({vote:vote})
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

const putHelpAns=(appid, ans)=>{
  console.log(JSON.stringify({ans:ans}))
  if(ls.isToken()){
    let url= cfg.url.api+'/common/help/ans/'+appid
    let options= {
      headers: {'Authorization': 'Bearer '+ ls.getToken(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({ans:ans})
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
const putHelpQues=(appid,ques)=>{
  console.log(JSON.stringify({ques:ques}))
  if(ls.isToken()){
    let url= cfg.url.api+'/common/help/ques/'+appid
    let options= {
      headers: {'Authorization': 'Bearer '+ ls.getToken(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({ques:ques})
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

const delHelp=(appid, id, qa)=>{
  if(ls.isToken()){
    let url= cfg.url.api+'/common/help/del/'+appid+'/'+qa+'/'+id  
    let options= {
      headers: {'Authorization': 'Bearer '+ ls.getToken(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE'
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


export {fetchHelp, putHelpAns, putHelpQues, delHelp, putVote}
