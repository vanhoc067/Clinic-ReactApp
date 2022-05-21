import { useContext, useState } from 'react';
import { Col, Form, Button} from 'react-bootstrap';   
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Apis, { endpoints } from '../configs/Apis';
import '../css/examination.css'


export default function Examination(){
    const [user, dispatch] = useContext(UserContext)
    const [newExam, setNewExam] = useState({
        "date_examination":'',
        "examination_schedule_patient":''
    })

    const nav = useNavigate()
    const change = (obj) => {
        setNewExam({
            ...newExam,
            ...obj
        })
    }

    const exam = async (event) => {
        event.preventDefault()

        let data = new FormData()
        data.append('date_examination',newExam.date_examination)
        data.append('examination_schedule_patient',newExam.examination_schedule_patient)

        try {
            const res = await Apis.post(endpoints['examination-schedule'],data,{
                headers: {
                    "Content-Type":'multipart/form-data'
                }
            })
            if (res.status === 201)
                alert("Đăng ký lịch khám thành công")
        } catch(error) {
            console.error(error)
        }       
    }
    let examination = <>
        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control className="box-1"  type="text" 
                            placeholder="Tên của bạn" value={newExam.name}
                            onChange={(evt) => change({'name':evt.target.value})} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control className="box-1"  type="text" 
                            placeholder="số điện thoại" value={newExam.phone}
                            onChange={(evt) => change({'phone':evt.target.value})} 
                        />
                        </Form.Group>
                        
    </>

    if (user != null) {
        examination = 
        <>
            <h2>Xin chào, <i style={{color: "red"}}>{user.username} </i> hãy đặt lịch khám ngay!</h2>
        </>
    }

    
    return(
        <>
           <section class="book" id="book">
                <h1 class="heading"> <span> ĐẶT LỊCH </span> KHÁM NGAY </h1> 
                <div class="row">
                  <Col md={4} xs={12}>
                  <div class="image">
                        <img src="https://res.cloudinary.com/duxlhasjq/image/upload/v1651900869/publicdomainq-doc2_ilwygi.svg" alt=""/>
                    </div>
                  </Col>
                    
                  <Col md={7} xs={12}>
                  <Form onSubmit={exam} >
                      <h3 >Hẹn lịch khám</h3>
                        {/* <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control className="box-1"  type="text" 
                            placeholder="Tên của bạn" value={newExam.name}
                            onChange={(evt) => change({'name':evt.target.value})} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control className="box-1"  type="text" 
                            placeholder="số điện thoại" value={newExam.phone}
                            onChange={(evt) => change({'phone':evt.target.value})} 
                        />
                        </Form.Group>
                       <Form.Group className='mb-3' controlId="formGroupEmail">
                            <Form.Select className='box-1 mb-3' value={newExam.gender}
                            onChange={(evt) => change({'gender':evt.target.value})}>
                                <option selected value>Giới tính</option>
                                <option>Nam</option>
                                <option>Nữ</option>
                            </Form.Select>
                        </Form.Group> */}
                        {examination}
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control className="box-1"  type="date" value={newExam.date_examination}
                            onChange={(evt) => change({'date_examination': evt.target.value})} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control className="box-1"  type="text" placeholder='Nhập mã bệnh nhân vào đây' value={newExam.examination_schedule_patient}
                            onChange={(evt) => change({'examination_schedule_patient': evt.target.value})} />
                        </Form.Group> 
                        
                        
                        <Button className="btn-book" type="submit">Đặt lịch ngay</Button>   
                    </Form>          
                  </Col>
                  
                </div>
            </section>
        </>
    )
}