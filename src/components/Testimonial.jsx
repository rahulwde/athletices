import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    img: 'https://i.ibb.co/Fq7YjZx8/image-50.jpg',
    name: 'Tanvir Rahman',
    comment: 'Booking my event was super smooth and fast. Loved the interface!',
  },
  {
    img: 'https://i.ibb.co/KpYrJr1t/img2.png',
    name: 'Sadia Alam',
    comment: 'It was my first competition and this platform made it feel easy and professional.',
  },
  {
    img: 'https://i.ibb.co/5XsGfprp/3img.jpg',
    name: 'Junaid Hossain',
    comment: 'Everything from signup to event booking worked great. Highly recommend!',
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-16 bg-base-200  text-[#1e1b4b] dark:text-[#ecfeff] rounded-3xl shadow-xl gap-10 overflow-hidden">

      {/* Left Slider */}
      <div className="w-full lg:w-1/2 relative h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full p-6 bg-base bg-[#083344] rounded-2xl shadow-md text-center space-y-4"
          >
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-[#f95f35]"
            />
            <p className="italic dark:text-gray-300">"{testimonials[index].comment}"</p>
            <h3 className="text-lg font-semibold text-[#f95f35]">{testimonials[index].name}</h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Text */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl text-[#f95f35]  font-bold">
          What They Say About Us?
        </h2>
        <p className="text-base-content max-w-md mx-auto lg:mx-0">
          Hear from athletes and organizers who’ve used our platform to succeed.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#f95f35] hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300"
        >
          See More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Testimonial;
