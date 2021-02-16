import React, { useEffect , useState, useContext} from 'react'
import {putHelpQues,fetchHelp, delHelp, putHelpAns} from '../fetchHelp'
import HelpApp from "./HelpApp.jsx";
import {AContext} from '../contexts/acontext'

export default function Help(){
  const {visiblePages} = useContext(AContext)
  const [help, setHelp]= useState([])
  const [allhelp, setAllhelp] = useState([])
  const [newQ, toggleNewQ]= useState(false)
  const appid ='jobs'

  useEffect(()=>{
    fetchHelp(appid)
    .then((res)=>{
      console.log('res: ', res)
      setAllhelp(res.results)
      makeData(res.results)
    })
  },[])

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

  const handleVote =()=>{
    console.log('handleVote')
  }


  const handleEditHelp=(ed)=>(e)=>{
    const id = ed.d=='q' ? 'qid' : 'aid'
    const edit = ed.d=='q' ? 'qedit' : 'aedit'
    let {m}=ed
    console.log('ed: ', ed)
    const ahupd= help.map((a)=>{
      // console.log('ed.m[id], a[id]: ', id, ed.m[id], a[id])
      if(1==1){
        switch (ed.do) {
          case 'input':
            console.log('edit: ', edit)
            if (edit=='qedit'){
              a[edit]=true
            }else{
              a.indent[ed.idx].aedit=true
              console.log('a.indent[ed.idx].aedit: ', a.indent[ed.idx].aedit)
            }
            break;
          case 'clearans':
            const numans = allhelp.filter((a)=>a.qid==ed.m.qid).length
            if (numans>1){
              help.allhelp=allhelp.filter((a)=>a.aid!=ed.m.aid)
              this.setState({help} )
            }else{
              const idx = allhelp.findIndex((a)=>a.aid==ed.m.aid)
              let ch = allhelp[idx]
              ch = {...ch, hereshow:null, arank:null, acontributor:null}
              allhelp[idx]=ch
              help.allhelp=allhelp
              this.setState({help} )              
            }
            delHelp(appid, ed.m[id], 'a')
            break;
          case 'clearques':
            const newh = allhelp.filter((a)=>a.qid!=ed.m.qid)
            help.allhelp=newh
            this.setState({help} )
            delHelp(appid, ed.m[id],'q')
            break;  
          case 'changeq':
            a.howto=e.target.value 
            break; 
          case 'changeans':
            console.log('a.indent[ed.idx]: ', a.indent, ed)
            a.indent[ed.idx].hereshow=e.target.value 
            break; 
          case 'selectp':
            a.pagename=e.target.value 
            this.setState({page:e.target.value})
            break; 
          case 'submita':
            e.preventDefault()
            putHelpAns(appid, {aid:a.aid, qid:a.qid, hereshow:a.hereshow, arank:a.arank, acontributor:a.acontributor})
            .then((res)=>{
              if(a.aid>7000){
                fetchHelp(this.props.help.appid)
                .then((res)=>{
                  const allhelp = res.results.map((m)=>{
                    m.qrankst=0
                    m.arankst=0
                    m.qedit=false
                    m.aedit=false
                    return m
                  })
                  console.log('allhelp: ', allhelp)
                  const{help}=this.state
                  help.allhelp=allhelp
                  this.setState({help:help}, console.log('this.props: ', this.props))
                })                
              }
              console.log('a.aid: ', a.aid)
              console.log('res: ', res)})
            a[edit]=false 
            break; 
          case 'submitq':
            console.log('m: ', m)
            putHelpQues(appid, {qid:m.qid, howto:m.howto,appid, pagename:m.pagename,})
            a[edit]=false 
            break; 
          default :
             break;
        }  
      }
      return a
    })
    setAllhelp(ahupd)
  }

  const handleAddDelHelp= (ed)=>()=>{
    e.preventDefault
    console.log('handleAddDelHelp', ed)
  }
  
  const handleQuestion =(q)=>()=>{
    const{m}=q
    m.appid =appid
    putHelpQues(appid, {qid:m.qid, howto:m.howto, appid:m.appid, pagename:m.pagename,})
    .then((res)=>{
      console.log('res: ', res)
      m.qid = res.results[0].insertId
      const newhelp =[...help]
      newhelp.push(m)
      console.log('newhelp: ', newhelp)
      setHelp(newhelp)
    })
  }

  const handleAnswer=(a)=>()=>{
    const{m}=a
    console.log('a: ', a)
  }

  return(
    <div>
    <HelpApp 
      ahelp={help} 
      xvote={handleVote} 
      modifyAnswer={handleAnswer}
    />
    <i onClick={handleAddDelHelp({do:'newQ', pages:'jobs'})}                        className="material-icons">add
    </i>
    {newQ &&
    <form onSubmit={handleAddDelHelp({do:'submitnewq'})}>
      <select value={this.state.page} onChange={handleAddDelHelp({do:'selectp',})}>
      {/* {help.routes.map((r,i)=>{
        return (<option value={r.page} key={i}>{r.page} </option> )
      })} */}
      </select>
      <textarea name="d" id="" cols="40" rows="4" value={'dog'} onChange={handleAddDelHelp({do:'changeq'})}/>
      <input type="submit" value="Submit" />
    </form>
    }
    </div>
  )

//   return(
//     <div style ={styles.help.div0}>


//       <span>
//       Dog Shares of GameStop — the company at the center of an online buying binge that captured the imagination of the world last week — crashed another 42 percent on Thursday, leaving it at a small fraction of the value it held just a few days ago.

// It was the third plunge in four trading sessions for the stock, which had become the symbolic heart of an online crusade against some of Wall Street’s most sophisticated investors.

// Shares of GameStop closed at $53.50, almost 90 percent below their peak of $483 on Thursday morning last week.

// The video game retailer’s stock is down 84 percent this week, and the rout has convinced many who favored the stock that the ride is over.

// “GME is dead,” one user, BoBo_HUST, wrote on Reddit’s WallStreetBets forum, using GameStop’s ticker symbol. Then the commenter wondered aloud about the prospects of one of the other so-called meme stocks, BlackBerry. “Can BB save us?”

// BlackBerry, the once-dominant maker of mobile device
//       </span>
//     </div>
//   )
}

const styles ={
  help:{
    div0:{
      backgroundColor: '#c7b1c9'
    }
  }
}