import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, json} from 'react-router-dom'
function Home({list,setlist,token}) {
  const config = {
    headers: {authorization: `bearer ${token}`}
  }
  const handleclick = async(_id) => {
    const res = await axios.delete('http://localhost:3002/api/list/'+_id)
    console.log(res.data);
    
}
  useEffect(() => {
  const fetchdata = async() => {
    const res = await axios.get('http://localhost:3002/api/list', config)
   if(res.data){
    const userlist = res.data
    // window.localStorage.setItem('listdata',JSON.stringify(userlist))
    setlist(userlist)
    console.log(list)
   }
   }
   fetchdata()
  },[])
  return (
    <div className='container'>
      <h1 className='heading1'>List Of Users</h1>
      <div className='list-container'>
        <button className='add'><Link to='/add' className='add1'><h3>Add +</h3></Link></button>
      <table className='user-table'>
        <thead className='heading-row'>
            <tr >
                <th className='heading'>NAME</th>
                <th className='heading'>EMAIL</th>
                <th className='heading'>PHONE</th>
                <th className='heading'>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {list ? (list.map((data,index) => (
              <tr key={index}>
                <td className='heading'>{data.Name}</td>
                <td className='heading'>{data.email}</td>
                <td className='heading'>{data.phone}</td>
                <td className='heading'>
                <button className='read'><Link to={`/read/${data._id}`} className='read'>Read</Link></button>
                <button className='update'><Link to={`/update/${data._id}`} className='update'>Update</Link></button>
                <button onClick={() => handleclick(data._id)} className='delete'>Delete</button></td>
              </tr>
            ))):(
              <div>loading...</div>
            )

            }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Home
