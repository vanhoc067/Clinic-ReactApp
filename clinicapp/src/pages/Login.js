import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';
import '../css/login.css'
const clientId = "254121591142-79r0nem4b0hmgfv06guu75lj0oslcefk.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <>
        <div class="form-signup">
            <div className='signup'>
                <h1 className='signup-heading'>ĐĂNG NHẬP</h1>
                <div class="g-signin">
                    { showloginButton ?
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign In"
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        /> : null}
                        { showlogoutButton ?
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Sign Out"
                            onLogoutSuccess={onSignoutSuccess}
                        >
                        </GoogleLogout> : null
                        }
                </div>
                <div class="signup-or"><span>Or</span></div>
                <form action="#" class="signup-form" autoComplete="off">
                    <label for="account" class="signup-label">Your account</label>
                    <input type="text" class="signup-input" placeholder="Eg: thinh123"></input>
                    <label for="password" class="signup-label">Password</label>
                    <input type="password" class="signup-input" placeholder="Input your password"></input>
                    <button class="signup-submit">Login</button>
                </form>
                
                <p class="signup-already">
                    <span>Already have an account ?</span>
                    <Link to='/register' class="signup-login-link">Sign up</Link>
                </p>
            </div>
        </div>  
        </>
            
    );
}
export default Login;