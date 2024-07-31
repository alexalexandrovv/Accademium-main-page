import React from "react";
import './Sign-Up.css';
import '../fonts.css';

const signUp = () => {
    return(
        <section className="signup">
        <h className="h14">
            Ready to take your academic journey to <br></br>
            the next level?
        </h>
        <p className='p8'>
            Sign up now and discover how Accademium can empower you to navigate <br></br>
            the application process with ease, achieve your academic goals, and <br></br>
            unlock your full potential.
        </p>
        <a href="#">
        <button className="sign-up-button">Sign up now &#10230;</button>
        </a>
        </section>
    );
}
export default signUp;