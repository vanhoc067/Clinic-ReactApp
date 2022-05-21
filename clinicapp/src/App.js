import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Body from './layouts/Body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import Medicine from './pages/Medicine';
import { createContext, useReducer } from 'react';
import userReducer from './reducers/UserReducer';
import cookie from "react-cookies";
import MedicineDetail from "./pages/MedicineDetail"
import Payment from './pages/Payment';
import PaymentDetail from './pages/PaymentDetail';
import Examination_schedule from './pages/Examination_schedule';
export const UserContext = createContext()




function App() {
  const [user,dispatch] = useReducer(userReducer, cookie.load('current_user'))
  return (
    <BrowserRouter>
    <UserContext.Provider value={[user, dispatch]}>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/trangchu" element={<Home/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/medicine' element={<Medicine />} />
        <Route path="/medicine/:medicineId" element={<MedicineDetail />}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/payment-detail" element={<PaymentDetail/>} />
        <Route path='/examination_schedule' element={<Examination_schedule />} />
      </Routes>
      <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
