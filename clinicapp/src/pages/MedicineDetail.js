import { useContext, useEffect, useState } from "react"
import { Badge, Container, Row, Spinner, Col, Image, Button, ListGroup, Form } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Api, { authAxios, endpoints } from "../layouts/configs/Api"
import { UserContext } from '../App';
import Rating from "react-rating";
import Moment from "react-moment";


const MedicineDetail = () => {
    const [medicine, setMedicine] = useState(null)
    const [liked, setLiked] = useState(false)
    const [rated, setRated] = useState(null)
    const [comments, setComments] = useState([])
    const { medicineId } = useParams()
    const [user] = useContext(UserContext)

    useEffect(() => {
        const loadMedicine = async () => {
            let res = null
            if(user != null){
                res = await authAxios().get(endpoints['medicine-detail'](medicineId))
            }else{
                res = await Api.get(endpoints['medicine-detail'](medicineId))
            }
            console.info(res.data)
            setMedicine(res.data)
            setLiked(res.data.like)
            setRated(res.data.rate)
        }

        loadMedicine()
    }, [])

    useEffect(() => {
        const loadComments = async () => {
            const res = await Api.get(endpoints['medicine-comments'](medicineId))
            setComments(res.data)
        }

        loadComments()
    }, [comments])

    const like = async() =>{
        const res = await authAxios().post(endpoints['like-medicine'](medicineId))
        setLiked(res.data.like)

    } 

    const rate = async (r) => {
        const res = await authAxios().post(endpoints['rate-medicine'](medicineId), {
            'rate': r
        })
        setRated(res.data.rate)
    }


    if (medicine === null)
        return <Container><Spinner animation="grow" /></Container>

    return (
        <Container>
            <h1 className="text-center text-info">Chi tiết: {medicine.name}</h1>
            <Row>
                <Col md={5} xs={12}>
                    <Image src={medicine.image} fluid />
                </Col>
                <Col md={7} xs={12}>
                    <div dangerouslySetInnerHTML={{__html: medicine.description}}></div>
                </Col>
            </Row>
            <Row>
            <Col >
                <div>
                    {user != null &&  <Button style={{width: "70px", height: "40px", paddingBottom: "60px"}} variant={liked == true?'primary': 'outline-primary'} onClick={like}><i class="fa-solid fa-thumbs-up"></i></Button>}
                    <br></br>
                    {user != null && <Rating initialRating={medicine.rating} onClick={rate}/>}
                </div>
            </Col>  
            </Row>
            <Row>
                <Col>
                    {user != null && <CommentForm medicineId={medicineId} comments={comments} setComments={setComments} />}
                    <ListGroup>
                        {comments.map(c => <ListGroup.Item>
                            <Image src={c.user.avatar} fluid width="50" roundedCircle /> {c.content} - <Moment fromNow>{c.created_date}</Moment>
                        </ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

const CommentForm = ({ medicineId, comments, setComments }) => {
    const [content, setContent] = useState()
    const [user] = useContext(UserContext)

    const addComment = async (event) => {
        event.preventDefault()

        const res = await authAxios().post(endpoints['comments'], {
            'content': content, 
            'medicine': medicineId,
            'user': user.id
        })

        setComments([...comments, res.data.results])
    }

    return (
        <Form onSubmit={addComment}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" value={content} onChange={(evt) => setContent(evt.target.value)} placeholder="Nhap binh luan" />
            </Form.Group>
        
            <Button variant="primary" type="submit" style={{frontSize: "10px"}}>
                Thêm bình luận
            </Button>
        </Form>
    )
}
export default MedicineDetail