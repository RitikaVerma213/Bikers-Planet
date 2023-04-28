import React from 'react';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Explore from '../Components/Explore';
import Footer from '../Components/Footer';
import Guide from '../Components/Guide';
import Review from '../Components/Review';
import ScrollUp from '../Components/ScrollUp';
import Social from '../Components/Social';
import Wall from '../Components/Wall';

const Home = () => {
  return (
    <>
        <Banner/>
        <Contact/>
        <Explore/>
        <Guide/>
        <Wall/>
        <Review/>
        <Social/>
        <div className='scrollUp'>
          <ScrollUp/>
        </div>
    </>
  )
}

export default Home;