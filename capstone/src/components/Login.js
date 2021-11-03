import React from 'react';
import { FormDiv, Input, FormButton } from '../styled-components/LoginStyled';

export default function Login() {
    return (
        <FormDiv>
            <h1>Login</h1>
            <Input type="text" placeholder="username"/>
            <Input type="password" placeholder="password"/>
            <FormButton>Login</FormButton>
            <a href="/signup">Create User</a>
        </FormDiv>
    )
}
