import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../css/home.css';
import Cards from './Cards';
import { Col, Row } from 'react-bootstrap';

function Home() {
  return (
      <>
        <div className='hero-container'>
          <video src='/videos/video-1.mp4' autoPlay loop muted />
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
          </div>
        </div>

        <section class="book" id="book">
            <h1 class="heading"> <span>Đặt lịch khám</span> ngay </h1>    
            <div class="row">
              <Row>
                 <Col md={5} xs={12}>
                    <div class="image">
                        <img src="https://res.cloudinary.com/don1bfybr/image/upload/v1651320348/Bai%20tap%20lon/book-img_en3osj.svg" alt=""/>
                    </div>
                 </Col>
                 <Col md={6} xs={12}>
                    <form action="">
                        <h3>Hẹn lịch khám</h3>
                        <input type="text" placeholder="họ và tên của bạn" class="box"/>
                        <input type="number" placeholder="số điện thoại" class="box"/>
                        <input type="email" placeholder="email" class="box"/>
                        <input type="date" class="box"/>
                        <input type="submit" value="đặt lịch ngay" class="btn"/>
                    </form>
                  </Col>
                </Row>
            </div>
        </section>

        <Cards />
</>
  );
}

export default Home;
