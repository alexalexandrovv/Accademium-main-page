import React from "react";
import './Companies.css';
import Uni1 from '../images/hanze-uni-removebg-preview.png';
import Uni2 from '../images/hochschule-uni-removebg-preview.png';
import Uni3 from '../images/campus2-uni-removebg-preview.png';
import Uni4 from '../images/nhl-stenden-uni-removebg-preview.png';
import Uni5 from '../images/rwth-uni-removebg-preview.png';
import Uni6 from '../images/Screenshot_2024-07-12_134742-removebg-preview.png';
import Uni7 from '../images/groingan-uni-removebg-preview.png';
import '../fonts.css';

const companies = () => {
    return(
        <section className="companies">
        <h4>50+ leading universities, associations, and <br></br>
            consultancy companies trust Accademium
        </h4>
        <div className="uni-img">
            <img src={Uni1} className="uni-photo-1"/>
            <img src={Uni2} className="uni-photo-2"/>
            <img src={Uni3} className="uni-photo-3"/>
            <img src={Uni4} className="uni-photo-4"/>
            <img src={Uni5} className="uni-photo-5"/>
            <img src={Uni6} className="uni-photo-6"/>
            <img src={Uni7} className="uni-photo-7"/>
        </div>
        
        </section>
    );
}
export default companies;