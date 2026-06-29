import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const navigate=useNavigate();

  const handlelogin=async()=>{
    console.log("submit clicked");
    try{
      const res=await fetch("http://localhost:3000/auth/login/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",

        },
        body:JSON.stringify({
          email,password
        }),
      });

      const data=await res.json();

      if(res.ok){
        localStorage.setItem("token",data.token);
        console.log("logged in")
        navigate("/");
        console.log("After navigate");
      }
      else{
        alert(data.message);
      }
    }
    catch(err){
      console.error(err);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <p>Login</p>
      
        <p>Email</p>
        <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <p>Password</p>
        <input type="text" placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}/>

        <button onClick={handlelogin}>Submit</button>
    </div>
  )
}

export default Login