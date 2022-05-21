import { Card, Col,Button } from "react-bootstrap";
import CardItem from "../pages/CardItem";
import '../css/cards.css';
import { memo } from "react"; 
import { Link, useNavigate } from 'react-router-dom';

const MedicineCard = (props) =>{
    let url = `/medicine/${props.obj.id}`

    return(
        <Col md={4} xs={12}>
                <div className='cards'>
                        <div style={{margin: "0"}}>
                            <div className='cards__wrapper'>
                                <ul className='cards__items' >
                                    <CardItem
                                    src={props.obj.image}
                                    label={props.obj.name}
                                    />
                                </ul>
                                <Link to={url} style={{marginLeft: "20px"}} className="btn btn-info" variant="primary">Chi tiết</Link>
                            </div>
                        </div>  
                </div>
        </Col>
    )
}


export default memo (MedicineCard)

