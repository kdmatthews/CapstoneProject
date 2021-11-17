import React from "react";
import { FormDiv, Input, FormButton, FormContain, SocialIcons, FormTitle, HrefTag} from "../styled-components/LoginStyled";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
  let history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const redirect = () => {
    history.push('/login')
  }
  const signUp = async (e) => {
    e.preventDefault();

    const signUp = await fetch("http://localhost:3000/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    redirect()
   

   
    
  }; 
 
  

  return (
    <FormContain>
    <FormDiv>
      <FormTitle>Sign Up</FormTitle>
      <span><SocialIcons href="#" class="social"><AiIcons.AiFillFacebook /><i class="fab fa-facebook-f"></i></SocialIcons>
				<SocialIcons href="#" class="social"><AiIcons.AiOutlineGoogle /><i class="fab fa-google-plus-g"></i></SocialIcons>
				<SocialIcons href="#" class="social"><FaIcons.FaTwitter /><i class="fab fa-linkedin-in"></i></SocialIcons>
        <SocialIcons href="#" class="social"><AiIcons.AiFillLinkedin/><i class="fab fa-linkedin-in"></i></SocialIcons></span>
      
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="name"
        type="text"
        placeholder="name"
      />
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="username"
        type="text"
        placeholder="username"
      />
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="password"
        type="password"
        placeholder="password"
      />
    <FormButton onClick={(e) => signUp(e)}>SignUp</FormButton>
    <HrefTag href="/login" onClick={(e) => signUp(e)}>Sign Up</HrefTag>
      <HrefTag href="/login">Already have an account? Login</HrefTag>
    </FormDiv>
    </FormContain>
  );
}
