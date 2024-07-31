import React from "react";
import './Storys.css';
import '../fonts.css';

const stories = () => {
    return(
        <section className="stories">
        <h6>Accademium helped 25,000+ students secure <br></br>
            university acceptance
        </h6>
        <p className='p2'>
            Accademium has facilitated the successful application and acceptance of <br></br>
            over 25,000 students into universities worldwide, equipping them with the <br></br>
            tools and uidance needed to fulfill their academic goals. 
        </p>
        <a href="#">
        <button className="read-stories">Read their story &#10230;</button>
        </a>
        </section>
    );
}
export default stories;