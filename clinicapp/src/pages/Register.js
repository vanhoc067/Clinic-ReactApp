import { Form } from "react-bootstrap";
import '../css/register.css'
export default function Register(){
    return(
        <>
        <div className="container">
            <h1 className="title">ĐĂNG KÝ NGƯỜI DÙNG</h1>
            <p className="title-1 text-info">Xin hãy nhập biểu mẫu dưới để đăng ký</p>
            <hr></hr>
             <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Họ tên</Form.Label>
                    <Form.Control className="dinh-dang" type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Ngày sinh</Form.Label>
                    <Form.Control className="dinh-dang" type="date"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Tên người dùng</Form.Label>
                    <Form.Control className="dinh-dang" type="text"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control className="dinh-dang" type="password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Nhập lại mật khẩu</Form.Label>
                    <Form.Control className="dinh-dang" type="password"/>
                </Form.Group>
                <div className="clearfix">
                    <button type="submit" className="signupbtn">Đăng ký</button>
                </div>
                    
            </Form>
        </div>
            
        </>
        
        
    )
}