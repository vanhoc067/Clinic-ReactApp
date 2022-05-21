import { useEffect, useState } from "react"
import { Row, Spinner } from "react-bootstrap"
import Api, { endpoints } from "../layouts/configs/Api"
import MedicineCard from "../layouts/MedicineCard"

export default function Medicine(){
    const [medicine, setMedicine] = useState([])

    useEffect(() => {
        let loadMedicine = async() => {
            try{
                let res = await Api.get(endpoints['medicine'])
                setMedicine(res.data.results)
            }catch (err) {
                console.error(err)
            }
        }
        loadMedicine()
    },[])
    return(
        <>
            <h1>My Medicine</h1>
            {medicine.length == 0 && <Spinner animation="grow" />}
            <Row >
                {medicine.map(c => <MedicineCard obj={c}/>)}
            </Row>
        </>
    )
}