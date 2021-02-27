import {cfg} from './utilities/getCfg'


const fetchAllJobs=(token)=>{
  if(token){
    let url= cfg.url.api+'/jobs/list'
    let options= {headers: {'Authorization': 'Bearer '+ token}}
    return(
      fetch(url, options)
        .then((response)=>response.json())
        .then((json)=>{
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

const fetchJob=(job,token)=>{
  if(token){
    let url= cfg.url.api+'/jobs/ajob'
    let options= {
      headers: {'Authorization': 'Bearer '+ token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({job:job})
    }
    return(
      fetch(url, options)
        .then((response)=>response.json())
        .then((json)=>{
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

const postJob=(job,token)=>{
  if(token){
    let url= cfg.url.api+'/jobs/job'
    let options= {
      headers: {'Authorization': 'Bearer '+ token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(job)
    }  
    return(
      fetch(url, options)
        .then((response)=>response.json())
    )        
  }else{
    let p2 =Promise.resolve({qmessage:'you dont exist! '})
    return p2
  }
}

export{fetchAllJobs, fetchJob, postJob}