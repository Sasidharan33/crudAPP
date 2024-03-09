import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as yup from 'yup'

const schema = yup.object().shape({
    Name:yup 
    .string()
    .required('Name is required ')
    .min(3,'name must be 3 letters'),
    email:yup 
    .string()
    .required('email is required')
    .email('enter a valid email'),
    phone:yup 
    .number()
    .required('phone number is required')
    .min(10,'phone atleast 10 digits long'),
    age:yup 
    .number()
    .required('age is required')
 })


function Update({update,setupdate}) {
  const {_id} = useParams()
  useEffect(() => {
    const fetchdata = async() => {
      const res = await axios.get('http://localhost:3002/api/list/'+_id)
        setupdate(res.data) 
        console.log(update) 
    }
    fetchdata()
  },[])

  const handlesubmit =async(event) => {
    event.preventDefault();
    const res = await axios.put('http://localhost:3002/api/list/'+update._id,update)
    setupdate(res.data)
    console.log(res.data)
  }
  return (
    <div className='update-main'>
      { update ? (<div className='update-form'>
        <h1>UPDATE USER</h1>
        <form action="" onSubmit={handlesubmit}>
        <label className='lab1' htmlFor="">Name</label><br />
        <input type="text" className='inpp1' onChange={e => setupdate({...update, Name: e.target.value})} 
        value={update.Name}/><br />
        <p>{schema.Name}</p>
        <label htmlFor="" className='lab2'>Email</label><br />
        <p></p>
        <input type="text" className='inpp1' onChange={e => setupdate({...update, email: e.target.value})} 
        value={update.email}/><br />
        <p></p>
        <label htmlFor="" className='lab2'>Phone</label><br />
        <p></p>
        <input type="number" className='inpp1' onChange={e => setupdate({...update, phone: e.target.value})} 
        value={update.phone}/><br />
        <p></p>
        <label htmlFor="" className='lab2'>Age</label><br />
        <input type="number" className='inpp1' onChange={e => setupdate({...update, age: e.target.value})} 
        value={update.age}/><br />
        <p></p>
        <button className='updte-but' type='submit'>Update</button>
        <button className='update-back'><Link className='back-link'>Back</Link></button>
        </form>
        
      </div>):(<div>loading...</div>)

      }
    </div>
  )
}

export default Update
