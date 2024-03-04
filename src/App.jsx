import Login from './Login'
import Signin from './Signin'
import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import List from './List'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/add' element={<List/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
