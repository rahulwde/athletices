import React, { use } from 'react';
import { motion } from "framer-motion";
import EventCard from '../Event/EventCard';
import { Link } from 'react-router';

const FeaturedEvent = ({ athleticPromise }) => {
  const atletics = use(athleticPromise);
   

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='text-center my-10'>
        <motion.h2
          className="text-4xl font-bold text-blue-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Events
        </motion.h2>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-6'>
          {
            atletics.slice(0,6).map(athletic => (
              <EventCard key={athletic._id} athletic={athletic} />
            ))
          }
        </div>

      <Link to="/event"> <button   className="btn btn-primary px-4 my-4 text-white font-bold">See All</button></Link>
      </div>
    </div>
  );
};

export default FeaturedEvent;
