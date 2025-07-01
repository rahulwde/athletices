import React from "react";
import { motion } from "framer-motion";
import {
  FaSwimmer,
  FaRunning,
  FaDumbbell,
  FaHiking,
  FaBicycle,
  FaVolleyballBall
} from "react-icons/fa";
import { MdSportsKabaddi, MdOutlineSportsGymnastics } from "react-icons/md";

const sportsData = [
  { name: "Swimming", icon: <FaSwimmer size={36} className="text-blue-500" /> },
  { name: "Sprinting", icon: <FaRunning size={36} className="text-red-500" /> },
  { name: "Long Jump", icon: <MdOutlineSportsGymnastics size={36} className="text-purple-500" /> },
  { name: "High Jump", icon: <MdSportsKabaddi size={36} className="text-green-500" /> },
  { name: "Hurdle Race", icon: <FaDumbbell size={36} className="text-yellow-500" /> },
  { name: "Trekking", icon: <FaHiking size={36} className="text-pink-500" /> },
  { name: "Cycling", icon: <FaBicycle size={36} className="text-teal-500" /> },
  { name: "Volleyball", icon: <FaVolleyballBall size={36} className="text-orange-500" /> },
];

const SportsCard = ({ sport, delay }) => (
  <motion.div
    className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-2xl transition-transform transform hover:scale-105"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center justify-center mb-4">{sport.icon}</div>
    <h4 className="text-lg font-semibold text-base-content">{sport.name}</h4>
  </motion.div>
);

const PopularSports = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-[#f95f35] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Popular Sports Categories
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sportsData.map((sport, idx) => (
            <SportsCard key={idx} sport={sport} delay={idx * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularSports;
