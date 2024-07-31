import './App.css';
import Navbar from './components/Navbar.js';
import OrientationSurvey from './components/OrienSurv.js';
import Section1 from './components/Section1.js';
import Companies from './components/Companies.js';
import Application from './components/ApplicationInfo.js';
import Stories from './components/Storys.js';
import Resources from './components/Resources.js';
import Questions from './components/Questions.js';
import SignUp from './components/Sign-Up.js';
import Footer from './components/Footer.js';
import './fonts.css';


const App = () =>{
  return (
    <div className='App-container'>
    <div className='NavBar'>
      <Navbar />
    <div className="OrientSurv">
      <OrientationSurvey />
    <div className='Section1'>
      <Section1 />
    <div className='Companies'>
    <Companies />
    <div className='Application'>
      <Application />
      </div>
      <div className='Stories'>
        <Stories />
        <div className='Resources'>
          <Resources />
        <div className='Questions'>
            <Questions />
        <div className='SignUp'>
          <SignUp />
          <div className='Footer'>
            <Footer />
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  );
}

export default App;
