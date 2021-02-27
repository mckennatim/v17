import React,{useState, useEffect, useContext} from 'react'
import {fetchAllJobs, fetchJob} from '../fetches'
import { AContext } from "../contextA";
import AJob from "./AJob.jsx";

const blajobs = [{id:'', job:'', category:'', week:'', yr:''}]

export default function JobCost (){
  const{token, selectedJob, setSelectedJob}=useContext(AContext)
  const[allJobs, setAllJobs]=useState(blajobs)
  const[foundJobs, setFoundJobs] = useState([])
  const [searchStr, setSearchStr] =useState('')
  const[jobCost,setJobCost]=useState()
  const[job,setJob]=useState()

  useEffect(()=>{
    getAllJobs()
  },[])

  const getAllJobs=()=>{
    fetchAllJobs(token)
    .then((res)=>{
      setAllJobs(res.jobs)
    })
  }

  useEffect(()=>{
    if(job){
      fetchJob(job,token)
      .then((res)=>{
        console.log('res: ', res)
        console.log('costs: ', res.costs)
        console.log('bid: ', res.bid)
        setSelectedJob(res.bid)
        setJobCost({job:job,bid:res.bid,costs:res.costs})
      })
    }
  },[job])

  console.log('selectedJob: ', selectedJob)

  const clickJob=(c)=>()=>{
    setJob(c)
    setFoundJobs([])
    setSearchStr('')
  }

  const search=(e)=>{
    const sel = e.target.value.toLowerCase()
    setSearchStr(sel)
    if(sel.length>1){
      const foundJobs = allJobs.filter((j)=>{
        return j.job.toLowerCase().includes(sel)
      }) 
      setFoundJobs(foundJobs) 
    }else{
      setFoundJobs([])
    }    
  }


  const renderSearched=()=>{
    const jobs = foundJobs.map((ajob,i)=>{
      return (
        <li  key={i} style={style.myli.li} onClick={clickJob(ajob.job)}>
          <div style={style.myli.job}> 
            <span>{ajob.job} </span>
            {ajob.default==1 && <span style={style.myli.sc}>def</span>}
          </div>
          <div style={style.myli.cat}>
            {ajob.category}</div>
        </li >)
    })
    return(
      <div style={style.myli.ul}>
        <input type="text" placeholder="&#128270; all jobs" value={searchStr} onChange={search}/>
        <ul style={style.myli.ul}>
          {jobs}
        </ul>
      </div>
    )
  }

  const render =()=>{
    if(!token){
      return(
        <div>register</div>
      )
    }else{
      return(
      <div>
        {renderSearched()}
        {jobCost && <AJob ajob={jobCost}/>}
      </div>
      )
    }

  }

  return(
    <div>
      {render()}
    </div> 
  )
}


const style = {
  btn:{

  },
  he:{
    margin: '2px 10px 10px 10px',
    height:'70px',
    yw:{
      padding: '1px 1px 10px 1px'
    },
    yr:{
      width: '45px',
      background: 'silver'
    },
    wk:{
      width:'44px',
      background: 'whitesmoke'
    },
    img:{
      
      float:'right',
      width: '30px'
    },
    act:{
      float: 'right'
    },
    get:{
      float:'left'
    },
    but:{
      ac:{
        margin: '4px',
        padding: '4px'
      },
      ia:{
        margin: '4px',
        padding: '4px'
      },
      al:{
        margin: '4px',
        padding: '4px'
      }
    },
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