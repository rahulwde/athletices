import React, { use, useState } from 'react';
import { motion } from "framer-motion";
import EventCard from '../Event/EventCard';

const FeaturedEvent = ({ athleticPromise }) => {
  const atletics = use(athleticPromise);
  const [showAll, setShowAll] = useState(false); 

  const displayedEvents = showAll ? atletics : atletics.slice(0, 6);

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
            displayedEvents.map(athletic => (
              <EventCard key={athletic._id} athletic={athletic} />
            ))
          }
        </div>

        {
          !showAll && atletics.length > 6 && (
            <button
              onClick={() => setShowAll(true)}
              className='mt-8 btn btn-outline text-blue-700 hover:bg-blue-700 hover:text-white px-8 rounded-xl transition'
            >
              See All Events
            </button>
          )
        }
      </div>
    </div>
  );
};

export default FeaturedEvent;
