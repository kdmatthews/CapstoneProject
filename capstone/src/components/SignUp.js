import React from 'react';
import { FormDiv, Input, FormButton } from '../styled-components/LoginStyled';
import { useState } from "react";

export default function SignUp() {
    const [formData, setFormData] = useState({name: "", username: "", password: ""});


    
 const signUp = async (e) => {
    e.preventDefault();

    const signUp = await fetch ("http://localhost:3000/signup", {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
 
}  

    return (
        <FormDiv>
            <h1>Sign Up</h1>
           
            <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name="name"   type="text" placeholder="name"/>
            <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name="username"type="text" placeholder="username"/>
            <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name="password"type="password" placeholder="password"/>
            {/* <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name="name"type="password" placeholder="verify password"/> */}
            <FormButton onClick={(e)=>signUp(e)}>SignUp</FormButton>
            <a href="/login">Already have an account? Login</a>
            {formData}
        </FormDiv>
    )
    
    }