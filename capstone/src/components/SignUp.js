import React from 'react';
import { FormDiv, Input, FormButton } from '../styled-components/LoginStyled';
import { useState } from "react";

export default function SignUp() {
    const [formData, setFormData] = useState({name: "", username: "", password: ""});
    console.log(formData)

const newUser = async (e) => {
    e.preventDefault();


    const signUpUser = await fetch ("https://localhost:3002/signup", {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({formData}),
    })
    return signUpUser;
    
}

    return (
        <FormDiv>
            <h1>Sign Up</h1>
            <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name="name"   type="text" placeholder="name"/>
            <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name="username"type="text" placeholder="username"/>
            <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name="password"type="password" placeholder="password"/>
            {/* <Input onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name="name"type="password" placeholder="verify password"/> */}
            <FormButton onClick={(e)=>newUser(e), ()=>console.log("clicked")}>SignUp</FormButton>
            <a href="/login">Already have an account? Login</a>
        </FormDiv>
    )
    
    }