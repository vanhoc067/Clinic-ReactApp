import { useEffect, useState } from "react";
import { Row, Table,Button,Card, Col } from "react-bootstrap";
import Api, { endpoints } from "../layouts/configs/Api";
import PaymentCard from "../layouts/PaymentCard";


export default function Payment () { 
    const [patient, setPatient] = useState([])
    useEffect(() => {
        let loadPatient = async () => {
            try {
                let res = await Api.get(endpoints["patient"])
                setPatient(res.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        loadPatient()
    },[])   

    return (
        <>
            <h1 className="text-center text-danger">THANH TOÁN HÓA ĐƠN</h1>
            <Row >
                {patient.map(p => <PaymentCard obj={p}/>)}
            </Row>
            <br></br>
            
        </>
    )
}