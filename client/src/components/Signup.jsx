import React, { useState } from 'react'
import "../App.css";
import Axios from "axios"

const Signup = () => {

    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const handleSubmit=(e) =>{
        e.preventDefault()
        Axios.post('http://localhost:4000/auth/signup', {username,email,password})
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div className='sign-up-container'>
        <h2>Sign Up </h2>

        <form className='sign-up-form' onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='Username' onChange={(e) =>setUsername(e.target.value)}/>

            <label className='email'>Email:</label>
            <input type='email' autoComplete='off' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='*******' onChange={(e)=>setPassword(e.target.value)}/>

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup