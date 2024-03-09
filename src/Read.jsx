import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

function Read({detail,setdetail}) {
    const {_id} = useParams()
    useEffect(() => {
      const fetchdata = async () => {
        const res = await axios.get('http://localhost:3002/api/list/'+_id)
        if(res.data){
          setdetail(res.data) 
          console.log(detail) 
        }
      }
      fetchdata()
    },[])
  return (
    <div>
      {
        detail ? (<div className='read-main'>
        <h1 className='d1-head'>Details Of User</h1>
        <h3 className='d1'>Name:{detail.Name}</h3>
        <h3 className='d1'>Email:{detail.email}</h3>
        <h3 className='d1'>Phone:{detail.phone}</h3>
        <h3 className='d1'>Age:{detail.age}</h3>
        <button className='d1-button'><Link className='back-link' to='/'>Back</Link></button>
        </div>
        ):(<div>loading...</div>)
      }
    </div>
  )
}

export default Read
