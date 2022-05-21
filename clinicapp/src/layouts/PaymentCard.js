import { useEffect, useState } from "react";
import { Card,Button,Col, Form } from "react-bootstrap";
import Moment from "react-moment";
import { Navigate, useNavigate } from "react-router-dom";
import Link from "react-scroll/modules/components/Link";
import Api, { endpoints } from "../layouts/configs/Api";
import '../css/payment.css'


export default function PaymentCard(props) {
    const nav = useNavigate()
    const [examination, setExamination] = useState([])
    const [bill, setBill] = useState([])
    useEffect(() => {
        let loadExamination = async () => {
            try {
                let res = await Api.get(endpoints["examination-schedule"])
                setExamination(res.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        let loadBill = async () => {
            try {
                let res = await Api.get(endpoints["bill"])
                setBill(res.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        loadBill()
        loadExamination()
    },[])

    const handleClick = () => {
        nav("/payment-detail")
    }

    


    return (
        <Col md={4} xs={12}>
                <Card>
                    <Card.Body>
                        <h3 className="text-center">Mã hóa đơn: {props.obj.id}</h3>
                        <div className="payment">
                            <Card.Text>Tên bệnh nhân:{props.obj.name}</Card.Text>
                            <Card.Text>Giới tính: {props.obj.gender}</Card.Text>
                            <Card.Text>Số điện thoại: {props.obj.phone}</Card.Text>
                            <Card.Text> Ngày khám bệnh: {examination.map(e => <Moment format="YYYY/MM/DD">{e.date_examination}</Moment>)}</Card.Text>
                            <Card.Text>Tổng tiền {bill.map(b => <> {b.amount_of_money} VNĐ </>)}</Card.Text>
                        </div>
                        <Button onClick={handleClick} type="submit">Thanh toán</Button>
                    </Card.Body>
                </Card>
        </Col>
    )
}