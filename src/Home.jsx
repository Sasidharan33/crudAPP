import React from 'react'
import { Link} from 'react-router-dom'
function Home() {
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
            <tr>

            </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Home
