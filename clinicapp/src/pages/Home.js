import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../css/home.css';
import Cards from './Cards';
import { Col, Row, Image } from 'react-bootstrap';

function Home() {
  return (
      <>
        <div className='hero-container'>
          <video src='https://res.cloudinary.com/don1bfybr/video/upload/v1651724455/Bai%20tap%20lon/production_ID_4121322_rwj12a.mp4' autoPlay loop muted />
          <h1>PHÒNG MẠCH OU</h1>
          <p>Bạn còn chờ đợi điều gì?</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--register'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--about'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              WATCH US <i className='far fa-play-circle' />
            </Button>
          </div>
        </div>

        <section class="book" id="book">
            <h1 class="heading"> <span>Đặt lịch khám</span> ngay </h1>    
            <div class="row">
              <Row>
                 <Col md={4} xs={12}>
                    <div class="image">
                        <img src="https://res.cloudinary.com/duxlhasjq/image/upload/v1651900869/publicdomainq-doc2_ilwygi.svg" alt=""/>
                    </div>
                 </Col>
                 <Col md={7} xs={12}>
                    <form action="">
                        <h3>Hẹn lịch khám</h3>
                        <input type="text" placeholder="name.." class="box"/>
                        <input type="number" placeholder="number phone.." class="box"/>
                        <input type="email" placeholder="email.." class="box"/>
                        <input type="date" class="box"/>
                        <input type="submit" value="Đặt lịch ngay" class="btn"/>
                    </form>
                  </Col>
                </Row>
            </div>
        </section>
        <section class="about" id="about">
            <h1 class="heading"> <span>giới thiệu</span> về chúng tôi </h1>
            <div class="row">
              <Row>
                <Col md={6} xs={12}>
                  <div class="content">
                      <h3>Chúng tôi tự hào khi được chăm sóc sức khỏe của bạn!</h3>
                      <p><i class="fa-solid fa-circle-arrow-right"></i> Thành lập năm 2022, Bệnh viện OU tự hào là thương hiệu có bề dầy kinh nghiệm chăm sóc và phục vụ khách hàng đến từ TP.Hồ Chí Minh và các tỉnh.</p>
                      <p><i class="fa-solid fa-circle-arrow-right"></i> Với tiêu chí “SỨC KHỎE LÀ VÀNG”, bệnh viện hòa bình luôn nỗ lực hết sức mình cùng khách hàng giữ gìn, bảo vệ sức khỏe bằng lòng yêu thương, coi sức khỏe của khách hàng như sức khỏe của bản thân.</p>
                      <p><i class="fa-solid fa-circle-arrow-right"></i> Cùng khách hàng nâng niu, chăm sóc vốn sức khỏe quý hơn vàng</p>
                  </div>
                </Col>
                <Col md={5} xs={12}>
                  <div class="image">
                      <img src="https://res.cloudinary.com/don1bfybr/image/upload/v1651320122/Bai%20tap%20lon/about-img_qkgicu.svg" alt=""/>
                  </div>
                </Col>
              </Row>
            </div>
        </section>
        <section class="icons-container">
            <div class="icons">
                <i class="fas fa-user-md"></i>
                <h3>40+</h3>
                <p>bác sĩ</p>
            </div>
            <div class="icons">
                <i class="fas fa-users"></i>
                <h3>140+</h3>
                <p>bệnh nhân hài lòng với dịch vụ</p>
            </div>
            <div class="icons">
                <i class="fas fa-procedures"></i>
                <h3>50+</h3>
                <p>giường bệnh</p>
            </div>
            <div class="icons">
                <i class="fas fa-hospital"></i>
                <h3>20+</h3>
                <p>nhiều chi nhánh trên cả nước</p>
            </div>
        </section>

        <Cards />
</>
  );
}

export default Home;
