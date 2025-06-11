import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Laura smith",
    comment:
      "I chose pizi because of their value and incredible superior customer service. Really awesome! An organization with 100% satisfaction that truly amazed me.",
    sport: "Runner",
    image: "https://i.ibb.co/Fq7YjZx8/image-50.jpg",
  },
  {
    name: "Tania Rahman",
    comment:
      "Swimming competition এ অংশগ্রহণ করেছি এবং পুরো process খুব সহজ ছিল!",
    sport: "Swimmer",
    image: "https://i.ibb.co/KpYrJr1t/img2.png",
  },
  {
    name: "Sujon Barman",
    comment:
      "আমি long jump competition বুক করেছি—কোনো ঝামেলা ছাড়াই! Highly recommended.",
    sport: "Long Jumper",
    image: "https://i.ibb.co/5XsGfprp/3img.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-gradient-to-br ">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Athletes Say
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-blue-500 p-10 rounded-2xl shadow-2xl max-w-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-6 shadow-md"
                  whileHover={{ scale: 1.05 }}
                />
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                  “{item.comment}”
                </p>
                <h4 className="text-xl font-semibold text-blue-700">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">{item.sport}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
