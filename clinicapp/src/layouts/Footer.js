import React from 'react';
import '../css/footer.css';
import { Button } from '../pages/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Tạo tài khoản và đăng kí ngay để nhận được những ưu đãi tốt nhất!
        </p>
        <p className='footer-subscription-text'>
          cung cấp email của bạn và click dưới đây để theo dõi chúng tôi
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="col30">
          <h4>Liên Hệ Với Chúng Tôi</h4>
          <ul class="contact">
              <li><i class="fa fa-university"></i> Ho Chi Minh City Open University</li>
              <li><i class="fa fa-phone"></i> Hotline: 0962243787</li>
              <li><i class="fa fa-envelope"></i> Email: hoc@ou.edu.vn</li>
          </ul>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PMOU
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Văn Học & Văn Thịnh © 2022</small>
          <div class='social-icons'>
            <a
              href="https://www.facebook.com/profile.php?id=100036081285141"
              class='social-icon-link facebook'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='http://instagram.com/vanhoc2k?utm_source=qr'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://youtube.com/channel/UCD2mCLAwSd6WB0AdfLXvABQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/VanHoc11111111'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/vanhoc067'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
