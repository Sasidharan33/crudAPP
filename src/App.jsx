import Login from './Login'
import Signin from './Signin'
import './App.css'
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Home from './Home'
import List from './List'
import { useEffect, useState, } from 'react'
import Read from './Read'
import Update from './Update'
function App() {
  const [detail,setdetail] = useState()
  const [user,setUser] = useState()
  const [token,settoken] = useState()
  const [list,setlist] = useState([])
  const[update,setupdate] = useState()
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={user?<Home list={list} token={token} setlist={setlist}/>:<Navigate to='/login'/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/login' element={<Login user={user} setUser={setUser} token={token} settoken={settoken}/>}/>
      <Route path='/add' element={user?<List user={user} setUser={setUser} token={token} settoken={settoken}/>:<Navigate to='/login'/>}/>
      <Route path='/read/:_id' element={<Read detail={detail} setdetail={setdetail}/>} />
      <Route path='/update/:_id' element={<Update update={update} setupdate={setupdate}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
