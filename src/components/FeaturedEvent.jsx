import React, { use } from 'react';
import { motion } from "framer-motion";
import EventCard from '../Event/EventCard';

const FeaturedEvent = ({athleticPromise}) => {
  const atletics = use(athleticPromise)
  
   
  return (
    <div>
           <div className='text-center my-8r'>
             <motion.h2
                  className="text-4xl font-bold text-blue-700 mb-12"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                   Featured Events
                </motion.h2>
                
                <div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-5 my-2'>
                    {
                       atletics.map(athletic=><EventCard key={athletic._id} athletic={athletic}></EventCard>)
                    }
                </div>
           </div>
        
       
    </div>
  );
};

export default FeaturedEvent;