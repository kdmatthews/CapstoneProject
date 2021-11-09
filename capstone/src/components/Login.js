import React from "react";
import { FormDiv, Input, FormButton } from "../styled-components/LoginStyled";

export default function Login() {
  const logIn = async (e) => {
    e.preventDefault();

    const logIn = await fetch("http://localhost:3000/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <FormDiv>
      <h1>Login</h1>
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <FormButton onClick={(e) => logIn(e)}>Login</FormButton>
      <a href="/signup">Create User</a>
    </FormDiv>
  );
}
