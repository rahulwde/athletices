import React, { Suspense } from 'react';
import Banner from './Banner';
import TestimonialSlider from '../../components/Testimonial';
import PopularSports from '../../components/PopularSports';
import FeaturedEvent from '../../components/FeaturedEvent';
import Loader from '../../components/Loader';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const athleticPromise = fetch("http://localhost:5000/athletics/public/get").then(res=>res.json())
  return (
    <div>
         <Helmet>
        <title>Home - Athletics</title>
        <meta name="description" content="Browse and post freelance tasks on TaskMarket." />
      </Helmet>
      <Banner></Banner>
      <Suspense fallback={<Loader></Loader>}>
      <FeaturedEvent athleticPromise={athleticPromise}></FeaturedEvent>

      </Suspense>
      <TestimonialSlider ></TestimonialSlider>
      <PopularSports></PopularSports>
    </div>
  );
};

export default Home;