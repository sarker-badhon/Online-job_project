import React from 'react';
import Header from '../../Header/Header';
import Slider from '../Slider/Slider';
import About from '../About/About';
import FindTalent from '../FindTalent/FindTalent';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <div className='mx-20'>

            <About></About>
            <FindTalent></FindTalent>
            </div>
        </div>
    );
};

export default Home;