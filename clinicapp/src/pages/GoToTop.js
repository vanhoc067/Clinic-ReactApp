
import React, { useEffect, useState } from "react";
import '../css/home.css';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setVisible(false)
            }
            else{
                setVisible(false)
            }
        })
    }, []);

    const scrollup = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return <div>   
        {ScrollToTop && (
            <button class="button-go-to-top" onClick={scrollup}><i class="fas fa-angle-double-up"></i></button>
        )}
        </div>;
};

export default ScrollToTop;