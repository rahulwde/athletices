import React, { Suspense } from 'react';
import Banner from './Banner';
import TestimonialSlider from '../../components/Testimonial';
import PopularSports from '../../components/PopularSports';
import FeaturedEvent from '../../components/FeaturedEvent';
import Loader from '../../components/Loader';

const Home = () => {
  const athleticPromise = fetch("http://localhost:5000/athletics").then(res=>res.json())
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<><Loader></Loader></>}>
      <FeaturedEvent athleticPromise={athleticPromise}></FeaturedEvent>

      </Suspense>
      <TestimonialSlider ></TestimonialSlider>
      <PopularSports></PopularSports>
    </div>
  );
};

export default Home;