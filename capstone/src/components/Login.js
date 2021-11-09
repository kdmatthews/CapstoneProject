import { React, useState } from "react";
import { FormDiv, Input, FormButton } from "../styled-components/LoginStyled";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const logIn = async (e) => {
    console.log({ formData });
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
          // put the token in local storage
          localStorage.setItem("jsonwebtoken", token);
        }
      });
    // if (session) {
    //   history.push("/home");
    // } else {
    //   alert(error);
    // }
  };
  return (
    <FormDiv>
      <h1>Login</h1>
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
        name="password"
        type="password"
        placeholder="password"
      />
      <FormButton onClick={(e) => logIn(e)}>Login</FormButton>
      <a href="/signup">Create User</a>
    </FormDiv>
  );
}
