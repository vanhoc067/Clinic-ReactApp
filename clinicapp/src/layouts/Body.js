import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer"

export default function Body(){
    return(
    

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path = "/" element={<Home/>} />
                </Routes>
                <Footer />
            </BrowserRouter>   
    )
}