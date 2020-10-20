import React from "react";
import Footer from '../../footer/footer'
import Myprogress from "../../progress/progress";
import Slider from "../../slider/slider";
import Tmembers from "../../tmembers/tmembers";

function Home () {

    
    return (
        <div>
            
            <Slider />
            <Tmembers />
            <Myprogress />
            <Footer />
        </div>
    );
    
}



export default Home;