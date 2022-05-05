import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Body from './layouts/Body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Doctor from './pages/Doctor';
import Examination from './pages/Examination';
import Register from './pages/Register';
import Login from './pages/Login';
import Services from './pages/Services';
import Products from './pages/Products';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/trangchu" element={<Home/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/examination" element={<Examination/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
