import { useEffect, useState } from "react";
import { Row, Table,Button,Card, Col } from "react-bootstrap";
import Api, { endpoints } from "../layouts/configs/Api";


export default function Examination_schedule () { 
    const [schedule, setSchedule] = useState([])
    useEffect(() => {
        let loadSchedule = async () => {
            try {
                let res = await Api.get(endpoints["examination_schedule"])
                setSchedule(res.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        loadSchedule()
    },[])   

    return (
        <>
            <h1 className="text-center text-danger">THÔNG TIN LỊCH KHÁM</h1>
            <Row >
                {/* {patient.map(p => <PaymentCard obj={p}/>)} */}
            </Row>
            <br></br>
            
        </>
    )
}