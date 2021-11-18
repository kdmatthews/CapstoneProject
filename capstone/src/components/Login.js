import { React, useState } from "react";
import { FormDiv, Input, FormButton, FormContain, SocialIcons, FormTitle, HrefTag } from "../styled-components/LoginStyled";

import { useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


import { connect } from "react-redux";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const logIn = async (e) => {
    e.preventDefault();
    const loginFetch = await fetch("http://localhost:3000/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success == true) {
          const token = result.token;
          localStorage.setItem("jsonwebtoken", token);
          props.onLoggedIn();
          history.push("/user");
        }
      });
    window.location.reload(false);
  };
  return (
    <FormContain>
    <FormDiv>
      <FormTitle>Login To Start a Campaign !</FormTitle>
			<span><SocialIcons href="#" class="social"><AiIcons.AiFillFacebook /><i class="fab fa-facebook-f"></i></SocialIcons>
				<SocialIcons href="#" class="social"><AiIcons.AiOutlineGoogle /><i class="fab fa-google-plus-g"></i></SocialIcons>
				<SocialIcons href="#" class="social"><FaIcons.FaTwitter /><i class="fab fa-linkedin-in"></i></SocialIcons>
        <SocialIcons href="#" class="social"><AiIcons.AiFillLinkedin/><i class="fab fa-linkedin-in"></i></SocialIcons></span>
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="username"
        type="text"
        placeholder="Username"
      />
      <Input
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        name="password"
        type="password"
        placeholder="Password"
      />
      <FormButton onClick={(e) => logIn(e)}>Login</FormButton>
      <HrefTag href="/signup">Create User</HrefTag>
    </FormDiv>
    </FormContain>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoggedIn: () => dispatch({ type: "ON_LOGGED_IN" }),
  };
};

export default connect(null, mapDispatchToProps)(Login);
