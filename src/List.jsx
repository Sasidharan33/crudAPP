import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import * as yup from 'yup'
import {useFormik} from 'formik'
import axios from 'axios'

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
function List({token}) {
  useEffect(() => {
     console.log(token)
  },[])
  const config = {
    headers: {authorization: `bearer ${token}`}
  }
  const {values,handleChange,handleBlur,handleSubmit,isSubmitting,errors} = useFormik({
    initialValues:{
      Name:'',
      email:'',
      phone:'',
      age:''
    },
    validationSchema:schema,
  onSubmit:async(values,actions) => {
    console.log(token)
    try{
      console.log(values,config)
    const res = await axios.post('http://localhost:3002/api/list',values,config);
    console.log(res.data)
    setTimeout(() => {
    actions.resetForm();
    actions.setSubmitting(false)
    },1000)
    
  }
  catch(err){
    console.log(err.response.data.message)
  }
  }
    

  })
  return (
    <div className='user-list'>
      <div className='user-list1'>
        <h1>ADD USER</h1>
        <form  action="" onSubmit={handleSubmit}>
          <input type="text"
          className='list-input' 
          placeholder='Enter Name' 
          name='Name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.Name}
          /><br />
          <p className='errors'>{errors.Name}</p>
          <input type="text" 
          className='list-input' 
          placeholder='Enter Email'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          /><br />
          <p className='errors'>{errors.email}</p>
          <input type="number" 
          className='list-input' 
          placeholder='Enter Phone'
          name='phone'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
          /><br />
          <p className='errors'>{errors.phone}</p>
          <input type="number" 
          className='list-input' 
          placeholder='Enter Age'
          name='age'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          /><br />
          <p className='errors'>{errors.age}</p>
          <button className='list-button1'><Link className='add1' to='/'><h3>BACK</h3></Link></button><br />
          <button type='submit' disabled={isSubmitting} className='list-button1'><h3>CREATE</h3></button>
        </form>
      </div>
    </div>
  )
}

export default List
