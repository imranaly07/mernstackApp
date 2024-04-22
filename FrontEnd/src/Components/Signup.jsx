import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
  } = useForm()

  const delay=async(d)=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      },d*1000);
    })
  }
  
  const onSubmit= async (data)=>{
    await delay(2)
    console.log(data)
    try {
      const response = await fetch("http://localhost:4001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container-form'>
          <Link to='/'>X</Link>
      {isSubmitting && <h2>your form has been saved</h2>}
        <h2>SignUp</h2>
      
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("username")}  placeholder='username'/>
            <input type="email" {...register("email")}  placeholder='email' />
            <input type="password" {...register("password")} placeholder='password'/>
            <input type="password" {...register("confirmpassword")} placeholder='confirmpassword'/>
            <button disabled={isSubmitting}>Submit</button>
        </form>
      
    </div>
  )
}

export default Signup
