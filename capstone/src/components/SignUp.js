import React from 'react'

export default function SignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="verify password"/>
            <button>SignUp</button>
            <a href="/login">Already have an account? Login</a>
        </div>
    )
}
