import React, { useContext } from "react";
import { AContext } from "../contextA";


export default function AJob({ajob}){
  const {setSelectedJob}=useContext(AContext)
  const{job,bid,costs}=ajob
  const{categories}=bid
  const catarr = JSON.parse(categories)

  console.log('catarr, costs,: ', catarr,costs)

  const editJob=()=>{
    setSelectedJob(bid)
  }
  

  const renderJobInfo =()=>{
    return(
      <div>
        <h4><span style={style.myli.idxsp} onClick={editJob}>&#9998;</span> {job}</h4>
      </div>
    )
  }

  return(
    <div> 
    {renderJobInfo()}
    </div>
  )
}

const style={
  myli :{
    od:{
      overflow:'hidden',
      width: '100%',
      border: '1px solid #ccc'
    },
    ul:{
      textAlign: 'left',
      listStyleType: 'none',
      paddingLeft: '12px'
    },
    li:{
      background: '#99CCCC',
      padding: '6px',
      overflow: 'hidden',
      border: 'solid 1px black'
    },
    sc:{
      fontSize: '9px',
      fonntWeight: 'bold',
      fontVariant: "small-caps",
      background: 'whitesmoke',
      color: 'blue'
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
      width: '40%',
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
    },
    up:{
      width: '10%',
      float: 'right',
      background: '#99CCCC'  
    },
    ar:{
      border: 'solid 1px black',
      fontSize: '24px',
      fontWeight:'bold',
      background: '#99CCFF'
    }
  }  
}