import React from 'react'
import ReactDOM from 'react-dom'

const geta=(dotstr, obj)=>{
  return dotstr.split(".")
    .slice(1)
    .reduce((xs,x)=>(xs && xs[x]) ? xs[x] : null , obj)
}

const deepObjModify=(dotstr, val, obj)=>{
  if(geta(dotstr, obj)){
    var keyarray = dotstr.split(".")
    var ls = keyarray.slice(-1)[0]
    keyarray
      .slice(1) 
      .reduce((xs,x)=>{
        if(xs && xs[x]) {
          if(x==ls){
            xs[x]=val
          }
          return xs[x]
        }
      }, obj)
    let newobj = {...obj}
    return newobj
  } else {
    return null
  }
}

const log = console.log.bind(console);

function el(id){
  return document.getElementById(id)
}

const dog = ()=>{
  return 'girl'
}

const render = (pg, para)=>{
  ReactDOM.render(React.createElement(pg, para), document.getElementById('rt')) 
}

const getRt=(hash)=>{
  return hash.split('/')[0].split('?')[0]
}

const parseQuery = (hashplus)=>{
  const query = hashplus.split('?')[1]
  let obj = {hayqry: false}
  if(query){
    obj.hayqry = true
    query.split('&')
    .map((term)=>{
      if(term){
        var ar = term.split('=')
        obj[ar[0]]=ar[1]
      }
    })
  }
  return obj
}

const parseHash = (hash)=>{
  let obj = {hayqry: false, lid:'', rt:getRt(hash)}
  const sqry = hash.split('/')
  if (sqry.length>1) {
    obj ={hayqry:true, lid:sqry[1], rt:sqry[0] }
  }
  return obj
}

export {geta, dog, render, log, parseQuery, parseHash, el, deepObjModify}  
