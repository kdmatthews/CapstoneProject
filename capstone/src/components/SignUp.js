import React from 'react';
import { FormDiv, Input, FormButton } from '../styled-components/LoginStyled';

export default function SignUp() {
    return (
        <FormDiv>
            <h1>Sign Up</h1>
            <Input type="text" placeholder="name"/>
            <Input type="text" placeholder="username"/>
            <Input type="password" placeholder="password"/>
            <Input type="password" placeholder="verify password"/>
            <FormButton>SignUp</FormButton>
            <a href="/login">Already have an account? Login</a>
        </FormDiv>
    )
}
