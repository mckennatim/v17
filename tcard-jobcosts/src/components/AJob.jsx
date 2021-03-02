import React, {useContext, createRef, useState } from "react";
import { AContext } from "../contextA";


export default function AJob({costs}){
  const [percArr, setPercArr]=useState([])
  const {selectedJob}=useContext(AContext)
  const{categories, job, address, hrs, labor }=selectedJob

  const changePC=(i)=>(e)=>{
    const p =[...percArr]
    p[i]=e.target.value
    setPercArr(p)
  }

  const renderDays=()=>{
    const dhrs = Object.values(costs.reduce((r, {wdprt,hrs})=>{
      return(
        r[wdprt]={wdprt,hrs:(r[wdprt]?.hrs || 0) + hrs}, r
      )
    },{}))  
    console.log('dhrs: ', dhrs)
    console.log('costs: ', costs)
    const rdhrs = dhrs.reduce((acc,d,i)=>{
      acc.push(d)
      const da = costs
      .filter((c)=>c.wdprt==d.wdprt)
      .map((f)=>{
        const rec = {cat:f.cat, employee: f.employee.split('@')[0], hrs:f.hrs}
        acc.push(rec)
        return rec
      })
      return acc
    },[])
    const dwrows = rdhrs.map((d,i)=>{
      if (d.wdprt){
        return(
        <tr key={i}>
          <td colSpan="2" align="left"><b>{d.wdprt}</b></td>
          <td></td>
          <td align="left"></td>
          <td align="right"><b>{d.hrs.toFixed()}</b></td>
        </tr>         
        )
      }else{
        return(
        <tr key={i}>
          <td>    </td>
          <td align="left">{d.cat}</td>
          <td align="left">{d.employee}</td>
          <td align="right">{d.hrs.toFixed()}</td>
        </tr>         
        )
      }
    })
    const daysRows = dhrs.map((d,i)=>{
      return(
        <tr key={i}>
          <td width="70%" align="left">{d.wdprt}</td>
          <td width="30%" align="right">{d.hrs.toFixed()}</td>
        </tr>         
      )
    })
    return(
      <div style={style.wbord}>
        <table style={{width:"100%"}}>
          <tbody>
            {dwrows}
          </tbody>
        </table>
      </div>   
    )
  }

  const renderCosts = (bt,bca)=>{
    console.log('bca: ', bca)
    function cd(bl,bh,ch){//calc deriver percent and labor used
      return {per:(ch/bh*100).toFixed(0), derlab:((ch/bh)*bl).toFixed(0)}
    }
    function calcPM(i){
      console.log(percArr[i])
      return (percArr[i]/100*labor -thrs.dl).toFixed()
    }
    const sh = costs.reduce((t,c)=>c.hrs+t,0)
    const td = cd(bt.labor, bt.hrs, sh )
    const thrs = {
      cat:'Total', 
      per: td.per,
      dl: td.derlab,
      sumHrs: sh
    }
    const chrs = Object.values(costs.reduce((r, {cat,hrs})=>{
      return(
        r[cat]={cat,sumHrs:(r[cat]?.sumHrs || 0) + hrs}, r
      )
    },{}))
    console.log('chrs: ', chrs)
    const costTotRows = chrs.map((c,i)=>{
      console.log('c: ', c)
      const bcc = bca.filter((f)=>f.cat==c.cat)[0]
      const tt = cd(bcc.labor, bcc.hrs, c.sumHrs )
      console.log('tt: ', tt)
      return(
        <tr key={i+1}>
          <td align="left">{c.cat}</td>
          <td></td>
          <td></td>
          {/* <td>{calcPM(i+1)}</td>
          <td>
            <input type="text" size="1" value={percArr[i+1]} onChange={changePC(i+1)}/>
          </td> */}
          <td align="right"><b>{tt.per}%</b></td>
          <td align="right"><b>${tt.derlab}</b></td>
          <td align="right">{c.sumHrs.toFixed()}</td>
        </tr>        
      )
    })
    
    return(
      <div>
        <div style={style.wbord}>
          <table  className="mui-table">
            <tr>
              <td align="left"><b>Costs</b></td>
              <td><b>+/-</b></td>
              <td><b>act%</b></td>
              <td align="right"><b>co%</b></td>
              <td align="center"><b>$</b></td>
              <td align="right"><b>Hrs</b></td>
            </tr>
            <tr>
              <td align="left"><b>{thrs.cat}</b></td>
              <td>{calcPM(0)}</td>
              <td>
                <input type="text" size="1" value={percArr[0]} onChange={changePC(0)}/>
              </td>
              <td align="right"><b>{thrs.per}%</b></td>
              <td align="right"><b>${thrs.dl}</b></td>
              <td align="right"><b>{thrs.sumHrs.toFixed()}</b></td>
            </tr>
            {costTotRows}
          </table>
        </div>
      </div>
    )
  }

  const renderBid =()=>{
    const catarr = JSON.parse(categories)
    const bidarr = [...catarr]
    if (catarr.length>0){
      const nocat = catarr.reduce((acc,c)=>{
        acc.hrs -= c.hrs ? c.hrs : 0
        acc.labor -= c.labor ? c.labor : 0
        return acc
      }, {cat:"", hrs:hrs, labor:labor})
      bidarr.unshift(nocat)
    }
    const bidobj = {cat:"total bid", hrs:hrs, labor:labor}
    // bidarr.push(bidobj)
    const bidrows = bidarr.map((r,i)=>{
      return(
        <tr key={i}>
          <td align="left">{r.cat}</td>
          <td></td>
          <td></td>
          <td></td>
          <td align="right">{r.labor}</td>
          <td align="right">{r.hrs}</td>
        </tr>
      )
    })
    return(
      <div>
        <div style={style.wbord}>
          <table  className="mui-table">
            <tr>
              <td align="left"><b>Bid:</b></td>
              <td></td>
              <td></td>
              <td></td>
              <td align="right"><b>$</b></td>
              <td align="right"><b>Hrs</b></td>
            </tr>
            {bidrows}
            <tr>
              <td align="left"><b>Total Bid</b></td>
              <td></td>
              <td></td>
              <td></td>
              <td align="right" ><span style={style.tot}>{bidobj.labor}</span></td>
              <td align="right"><span style={style.tot}>{bidobj.hrs}</span></td>
            </tr>
          </table>
        </div>
        {renderCosts(bidobj,bidarr)}
      </div>
    )
  }

  const renderJobInfo =()=>{
    return(
      <div>
        <h4> {job}</h4>
        <div style={style.address}>{address}</div>
      </div>
    )
  }

  return(
    <div> 
    {renderJobInfo()}
    {renderBid()}
    {renderDays()}
    </div>
  )
}

const style={
  address:{
    whiteSpace: 'pre',
  },
  wbord:{
    border: "solid 1px"
  },
  tot:{
    borderTop: "solid 1px",
    fontWeight:"bold"
  },
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