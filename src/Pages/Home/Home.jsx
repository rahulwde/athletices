import React, { Suspense } from "react";
import Banner from "./Banner";
import TestimonialSlider from "../../components/Testimonial";
import PopularSports from "../../components/PopularSports";
import FeaturedEvent from "../../components/FeaturedEvent";
import Loader from "../../components/Loader";
import { Helmet } from "react-helmet-async";
import Pricing from "../../components/Pricing";

const Home = () => {
  const athleticPromise = fetch(
    "https://athletics-server.vercel.app/athletics/public/get"
  ).then((res) => res.json());
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Home - Athletics</title>
        <meta
          name="description"
          content="Browse and post freelance tasks on TaskMarket."
        />
      </Helmet>
      <Banner></Banner>
      <Suspense fallback={<Loader></Loader>}>
        <FeaturedEvent athleticPromise={athleticPromise}></FeaturedEvent>
      </Suspense>
      <TestimonialSlider></TestimonialSlider>
      <PopularSports></PopularSports>
      <Pricing/>
    </div>
  );
};

export default Home;
