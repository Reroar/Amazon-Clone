import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import "./Login.css";
import { auth } from "../firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //firebase login shiiiett
    }

    const register = e => {
        e.preventDefault();
        
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                navigate("/")
            }
        } )
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
    <Link to="/">
    <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="amazon__logo"/>     
    </Link>

    <div className="login__container">
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
        </form>

        <p>
        By continuing, you agree to Amazon clone's Conditions of Use and Privacy Notice.
        </p>

        <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
    </div>
    </div>
  )
}

export default Login;