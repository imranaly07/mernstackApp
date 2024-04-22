import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  const delay=(d)=>{

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()

        },d*1000)
        
    })
  }

  const onSubmit= async (data)=>{
   await delay(2)
   const response = await fetch("http://localhost:4001/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),



   });

    


   try {
    
   } catch (error) {
    console.log(error)
   }
  }



  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <div className="container-form">
            {isSubmitting && <h2>Your Form is being Submitted..</h2>}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <input
              type="text"
              {...register("username", {
                required: { value: true, message: "required field" },
                minLength:{value:3,message:"min Length is 3"},
                maxLength:{value:8,message:"max Length is 10"}
              })}
              placeholder="username"
            />
              {errors.username && <span>{errors.username.message}</span>}

            <input type="password"   {...register("password", {
                required: { value: true, message: "required field" },
                minLength:{value:3,message:"min Length is 3"},
                maxLength:{value:8,message:"max Length is 10"}
              })} placeholder="password" />
             {errors.password && <span>{errors.password.message}</span>}

            
            <button disabled={isSubmitting}>submit</button>
          </form>
          <a href="/signup">sign up here</a>
        </div>
      </div>
    </dialog>
  );
}

export default Login;
