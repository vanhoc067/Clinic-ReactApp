import { useRef, useState } from "react";
import { Form,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Api, { endpoints } from "../layouts/configs/Api";
import '../css/register.css'


export default function Register(){
    const [newUser, setNewUser] = useState({
        "first_name":'',
        "last_name":'',
        "email":'',
        "username":'',
        "password":"",
        "confirmPassword":"",
    })

    const avatar = useRef()
    const nav = useNavigate()
    const change = (obj) => {
        setNewUser({
            ...newUser,
            ...obj
        })
    }

    const register = async (event) => {
        event.preventDefault()

        let data = new FormData()
        data.append('first_name',newUser.first_name)
        data.append('last_name',newUser.last_name)
        data.append('email',newUser.email)
        data.append('username',newUser.username)
        data.append('password',newUser.password)
        data.append('confirmPassword',newUser.confirmPassword)
        data.append('avatar',avatar.current.files[0])

        try {
            const res = await Api.post(endpoints['users'],data,{
                headers: {
                    "Content-Type":'multipart/form-data'
                }
            })
            if (res.status === 201)
                nav("/login")
        } catch(error) {
            console.error(error)
        }

    }

    return(
        <>
        <div className="container">
            <h1 className="title">ĐĂNG KÝ NGƯỜI DÙNG</h1>
            <p className="title-1 text-info">Xin hãy nhập biểu mẫu dưới để đăng ký</p>
            <hr></hr>
             <Form onSubmit={register}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control className="dinh-dang" type="text"
                    placeholder="input your firstname" value={newUser.first_name}
                    onChange={(evt) => change({'first_name':evt.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control className="dinh-dang" type="text"
                    placeholder="input your lastname" value={newUser.last_name}
                    onChange={(evt) => change({'last_name':evt.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="dinh-dang" type="email"
                    placeholder="Your email" value={newUser.email}
                    onChange={(evt) => change({'email':evt.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="dinh-dang" type="text"
                    placeholder="Your username" value={newUser.username}
                    onChange={(evt) => change({'username':evt.target.value})}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="dinh-dang" type="password"
                    placeholder="password" value={newUser.password}
                    onChange={(evt) => change({'password':evt.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control className="dinh-dang" type="password"
                    placeholder="Reconfirmed password" value={newUser.confirmPassword}
                    onChange={(evt) => change({'confirmPassword':evt.target.value})}/>
                </Form.Group>
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" ref={avatar}/>
                <div className="clearfix">
                    <Button type="submit" className="signupbtn">Đăng ký</Button>
                </div>    
                    
            </Form>
        </div>
            
        </>
        
        
    )
}