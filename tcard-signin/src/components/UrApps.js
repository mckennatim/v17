import React, { useContext, useEffect } from "react";
import { AContext } from "../contextA";
import { parseQuery } from "../utilities/wfuncs";
import { ls } from "../utilities/getCfg";

export default function UrApps(){
  const{qry, history}=useContext(AContext)

  useEffect(()=>{
    const search = history.location.search.slice(1)
    if(search){
      ls.setItem(parseQuery(search))
      history.replace({search:""})
    }
  })

  const eraseSearch=()=>{
    history.replace({search:""})
  }

  return(
    <div style={styles.out}>
      <h4>
        in urapps
      </h4>
      {qry}
      <button onClick={eraseSearch}>push </button>
    </div>
  )
}

const styles ={
  out:{
    background: "#99CCCC",
    height:"500px",
    padding: "8px"
  }
}
