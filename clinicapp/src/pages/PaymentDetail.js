import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Api, { endpoints } from "../layouts/configs/Api"
import '../css/payment-detail.css'

export default function PaymentDetail(props) {
    const nav = useNavigate()
    const [bill, setBill] = useState([])
    useEffect(() => {

        let loadBill = async () => {
            try {
                let res = await Api.get(endpoints["bill"])
                setBill(res.data.results)
            }
             catch (error) {
                console.error(error)
            }
        }
        loadBill()
    },[])
    
    
    return (
        <>
        <Form>
        <h1>CHỌN PHƯƠNG THỨC THANH TOÁN</h1>
            <div class="button-thanh-toan">
                <div class="thanh-toan">
                    <Button  type="submit">Thanh toán trực tiếp</Button>
                </div>
                <div class="thanh-toan">
                    <Button type="submit">Thanh toán qua momo</Button>
                </div>
            </div>
        </Form>
        </>
        
        
    )
}