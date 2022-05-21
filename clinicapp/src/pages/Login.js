import { useContext, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import cookie from "react-cookies";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import Api, { authAxios, endpoints } from "../layouts/configs/Api";

const clientId = "254121591142-79r0nem4b0hmgfv06guu75lj0oslcefk.apps.googleusercontent.com";

export default function Login(){

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [errorMessage, setErrorMessage] = useState(null)
    const [user, dispatch] = useContext(UserContext)

    const [showloginButton, setShowloginButton] = useState(true)
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

    const login = async (event) => {
        event.preventDefault()

        try{
            const res = await Api.post(endpoints['login'],{
                'client_id':'jMEgYHNeQXeqqQ2LRjRxXixpljueh3PXZzvgkSRo',
                'client_secret':'Z7dIjoZ4oWloRWDlwdibFQLI2ZOMLahtmOvLi4FKkYn6tpALMwVQWwpvWfzsVf2NhgWh0mD9isJ9zy0Tclez21KbKdk4XCkQlBxdEX1n4W6Qle5aomybYDdOIF0zJaXe',
                'username':username,
                'password':password,
                'grant_type':'password',
            })

            if (res.status === 200){
                // console.info(res.data)
            cookie.save('access_token',res.data.access_token)
    
            // lấy current_user
            const user = await authAxios().get(endpoints['current_user'])
            cookie.save('current_user',user.data)
            dispatch({
                "type":"login",
                "payload": user.data
            })
        }
        }catch (error){
            console.info(error)
            setErrorMessage("Đồng chí nhập sai username hoặc password rồi")
        }
    }
    if(user != null) 
        return <Navigate to="/" />
    return(
        <div className="container" >
            <h1 className="title">ĐĂNG NHẬP</h1>

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

            {errorMessage !== null && <Alert key='danger' variant='danger'> 
                {errorMessage}
            </Alert>}
            <hr></hr>  
            <div class="signup-or"><span>Or</span></div> 
                 <Form onSubmit={login}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>username</Form.Label>
                        <Form.Control className="dinh-dang" type="text" value={username} onChange={(event) => setUsername(event.target.value)}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="dinh-dang" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </Form.Group>
                    <div className="clearfix">
                        <Button type="submit" className="signupbtn">
                        Đăng nhập
                        </Button>
                    </div> 
                </Form>
        </div>
        
    )
}