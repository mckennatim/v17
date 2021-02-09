import React from 'react'

export default function responsive(multi,panes,path,compoi){
  console.log('multi: ', multi)
  console.log('panes: ', panes)
  console.log('path: ', path)
  console.log('compoi: ', compoi)
  console.log('multi[path]: ', multi[path])
  let pgArr =[]

  const nextBest =(arr, panes)=>{
    const sa= arr.filter((a)=>a.length == panes)
    console.log('sa: ', sa, sa.length)
    if(sa.length>0) {
      console.log('sa: ', sa)
      pgArr = sa
      return sa
    } else {
      console.log('arr,panes-1: ', arr,panes-1)
      nextBest(arr, panes-1)
    }
  }
  nextBest(multi[path], panes)

  const renderPages = (ar) => {
    const pgs = ar.map((a,i)=>{
      return React.createElement(compoi[a], {key:i}, null)
    })
    return pgs
  }

  const pages = renderPages(pgArr)
  return pages
}