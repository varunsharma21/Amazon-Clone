import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./Login.css";

const signIn = e => {
    // prevents refresh.
    e.preventDefault(); // ****

    // some fancy firebase login shit...
}

const register = e => {
    e.preventDefault();

    // some registration firebase shit
}

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            
            <Link to="/">
                <img className='login__logo' src='../amazon-black-logo.jpg' alt='' />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E mail</h5>
                    <input type='text' value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type='password' value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit' onClick={signIn} className='login__signInButton' >
                        Continue
                    </button>
                </form>

                <p>
                    By continuing, you agree to Amazon
                    Clone's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className='login__registerButton' >
                    Create your Amazon Account
                </button>

            </div>
            
        </div>
    )
}

export default Login;
