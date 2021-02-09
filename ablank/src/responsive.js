import React,{Suspense} from 'react'

const styles={
  container:{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    backgroundColor: '#ece6ed'
  },
}

export default function responsive(multi,panes,slashpath, compoi){
  let path = slashpath.substr(1)
  if(!multi[path]){
    path = multi.default
  }
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
  console.log('pgArr: ', pgArr[0])

  const pages = pgArr[0].map((n,i)=>{
    return React.createElement(compoi[n], {key:i}, null)
  })
  return(
    // <Suspense fallback={<div>Loading...</div>}>
    <div style ={styles.container} >
      {pages}
    </div>    

    // </Suspense>
  )
  // return pgArr
}