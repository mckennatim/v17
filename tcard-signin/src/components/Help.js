import React, { useEffect , useState, useContext} from 'react'
import {fetchHelp} from '../fetchHelp'
import HelpApp from "./HelpApp.jsx";
import {AContext} from '../contextA'
import {ls} from '../utilities/getCfg'

export default function Help(){
  const {token, visiblePages, appid} = useContext(AContext)
  const [help, setHelp]= useState([])
  const [, setAllhelp] = useState([])
  const [message, setMessage]=useState()

  useEffect(()=>{
    fetchHelp(appid, token)
    .then((res)=>{
      console.log('res: ', res)
      if (res.qmessage){
        setMessage(res.qmessage)
        if (res.qmessage=="you dont exist! Try re-registering ") {
          setMessage(`Oops,${res.qmessage}At least, you are not connected to an active company so you have no apps to see`)
        }
      }else if (res.message){
        setMessage(res.message)
      }else{
        setAllhelp(res.results)
        makeData(res.results)
        setMessage()
      }
    })
  },[token])

  function makeData(allhelp){
    const ahelp = filterByPageNames(allhelp)
    const bhelp = indentData(ahelp.slice())
    setHelp(bhelp)
    return bhelp
  }

  const filterByPageNames=(allhelp)=>{
    const pages= visiblePages
    const fhelp = [...allhelp]
    .filter((a)=>{
      return pages.length==1 ? true : pages.includes(a.pagename)
    })
    .sort((a,b)=>{
      if (b.pagename===a.pagename){
        return b.qrank<a.qrank ? -1 : 1
      }
      return b.pagename>a.pagename ? -1 : 1
    })
    .map((m)=>{
      return m  
    })
    return fhelp
  }

  const indentData = (sdata)=>{
    let bhelp = sdata
    .reduce((acc,rr)=>{
      const r = {...rr}
      r.toggle=true
      let qh = {
        qid:r.qid,
        qrank:r.qrank,
        qrankst: r.qrankst,
        qedit:r.qedit,
        howto:r.howto,
        appid:r.appid,
        pagename:r.pagename,
        qcontributor:r.qcontributor
      }
      let ah = {
        qid: r.qid,
        aid: r.aid,
        arank:r.arank, 
        arankst: r.arankst,
        aedit: r.aedit,
        hereshow:r.hereshow, 
        acontributor:r.acontributor
      }
      if(acc.length==0){
        qh.indent=[ah]
        acc.push(qh)
      }else{
        let lhw = acc.pop()
        if(lhw.qid==r.qid){
          lhw.indent.push(ah)
          acc.push(lhw)
        }else{
          qh.indent = [ah]
          acc.push(lhw)
          acc.push(qh)
        }
      }
      return acc
    },[])  
    const bshelp=bhelp.map((b)=>{
      if(b.indent.length>1){
        const sorted = b.indent
        .sort((a,b)=>{
          return a.arank<b.arank
        })
        b.indent=sorted
      }
      return b
    })
    return bshelp     
  }



  const render =()=>{
    if(message){
        return(
          <div>
            <h4>Help</h4>
            <p>{message} </p>
          </div>
        )
    }else{
      return(
      <div>
        <HelpApp 
          ahelp={help} 
        />
      </div>
      )
    }
  }

  return(
    <div style={styles.out}>
      {render()}
    </div>
  )
}

const styles={
  out:{
    background: "#99CCFF",
    padding: "4px"
  }
}

// const styles ={
//   help:{
//     div0:{
//       backgroundColor: '#c7b1c9'
//     }
//   }
// }