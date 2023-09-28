import React from 'react';
import './CSS/Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider2';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className='homeBody'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Slider/>
      </div>
      {/* <div>

      </div> */}
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
