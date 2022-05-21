import React, { useState, useEffect, useContext } from 'react';
import { Button } from '../pages/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../css/header.css';
import { UserContext } from '../App';
import cookie from 'react-cookies';
import { Nav, NavDropdown } from 'react-bootstrap';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [user,dispatch] = useContext(UserContext)
  const nav = useNavigate()

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const logout = (event) => {
    event.preventDefault()
    cookie.remove('access_token')
    cookie.remove('current_user')
    dispatch({"type":"logout"})
    nav("/login")
  }

  let btn = <Link to='/login' className='nav-links'onClick={closeMobileMenu}>
    <i class="fa-solid fa-right-to-bracket" style={{marginBottom:"3px", paddingRight:"3px"}} />
      Đăng Nhập
    </Link>
    
  let regis = <Button buttonStyle='btn--register'>ĐĂNG KÍ</Button>

  let examination = <>
    <li className='nav-item'>
      <a
        href="#book"
        className='nav-links'
      >
      <i class="fas fa-file-signature" style={{marginBottom:"3px", paddingRight:"3px"}} />
        Đăng Kí Lịch Khám
      </a>
    </li>
  </>

  let doctor = <>
     <li className='nav-item'>
      <a
        href='#doctor'
        className='nav-links'
      >
        <i class="fa-solid fa-users-line" style={{marginBottom:"3px", paddingRight:"3px"}} />
        Đội ngũ bác sĩ
      </a>
    </li>
  </>

  if(user != null) {
    btn = 
    <>
        <Link to="/" className="nav-link text-info" style={{marginBottom:"3px", paddingTop:"20px"}} > 
        
          <Nav>
          <img class="rounded-circle" src={user.avatar_path} width={30} height={30}/>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title= {` Welcome ${user.username}`}
              menuVariant="dark"
            >
              <NavDropdown.Item href="#" style={{textAlign:"center", color: "green"}}>Thông tin User</NavDropdown.Item>
              <NavDropdown.Item><Link to="/examination_schedule" style={{textAlign:"center", textDecoration: 'none' }} variant="primary">Lịch khám cá nhân</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/payment" style={{textAlign:"center", textDecoration: 'none' }} variant="primary">Thanh toán hóa đơn</Link></NavDropdown.Item>
              <NavDropdown.Item><a href="" style={{textAlign:"center", width:"100%"}} onClick={logout} className="nav-link text-danger">Đăng xuất</a></NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Link>
    </>
    regis = null
    doctor = null
  } else{
    examination = null
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PMOU
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <i class="fas fa-home" style={{marginBottom:"7px", paddingRight:"3px"}}/>
                Trang Chủ
              </Link>
            </li>
            {examination}
            <li className='nav-item'>
              <a
                href='#about'
                className='nav-links'
              >
                <i class="fa-solid fa-users-line" style={{marginBottom:"3px", paddingRight:"3px"}} />
                Về Chúng Tôi
              </a>
            </li>
            {doctor}
            <li className='nav-item'>
            {btn}
            </li>
          </ul>
          {button && regis}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
