import React,{useState} from 'react'
import * as yup from 'yup';
import {useFormik} from 'formik'
import l1 from './images/login.jpg'
import axios from 'axios';
import { Navigate, json } from 'react-router-dom';

const schema = yup.object().shape({
  username:yup 
  .string()
  .required('username is required')
  .min(3,'username atleast 3 characters'),
  email:yup 
  .string()
  .required('email is required')
  .email('enter a valid email'),
  password:yup 
  .string()
  .required('password is required')
  .min(4,'password atleast 4 characters')
})

function Login({token,settoken,user,setUser}) {
  const [registered,Setregistered] = useState(false)
  const {handleBlur,handleChange,handleSubmit,isSubmitting,values,errors} = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },
    validationSchema:schema,
    onSubmit:async(values,actions) => {
     try{
       const res = await axios.post('http://localhost:3002/api/login',values)
       if(res.statusText='OK'){
        Setregistered(true)
        const user=res.data
        window.localStorage.setItem('loggedintoken',JSON.stringify(user))
        setUser(user)
        settoken(user.token)
          console.log(user)
        setTimeout(() => {
        actions.resetForm();
        actions.setSubmitting(false);
        },1000)
       }
     }
     catch(err){
      alert(err)
      setTimeout(() => {
        actions.resetForm();
        actions.setSubmitting(false);
        },1000)
     }
    }

  })
  return (
    <div>
     {user ? <Navigate to='/'/>:(
       <div className='login-main'>
       <div className='login-image'>
         <img className='image' src={l1} alt="nature" />
       </div>
         <div className='login-form'>
          <h1 className='heding1'>LOGIN</h1>
          <form onSubmit={handleSubmit} >
          <input className='inp1' 
          type="text" 
          name='username'
          placeholder='username'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          /><br />
          <p className='errors'>{errors.username}</p>
          <input className='inp2' 
          type="text" 
          name='email'
          placeholder='Email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          /><br/>
          <p className='errors'>{errors.email}</p>
          <input className='inp3' 
          type="password" 
          name='password'
          placeholder='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          /><br/>
          <p className='errors'>{errors.password}</p>
          <button type='submit' disabled={isSubmitting} className='button1'>SUBMIT</button>
          </form>
         </div>
   </div>
     )

     }

    </div>
  )
}

export default Login
