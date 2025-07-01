import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "৳499",
    features: ["1 Event Booking", "Basic Support", "Email Notification"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "৳999",
    features: ["5 Event Bookings", "Priority Support", "Reminder Alerts"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "৳1999",
    features: ["Unlimited Bookings", "24/7 Support", "Custom Features"],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#f95f35] mb-3">Our Pricing Plans</h2>
        <p className="text-lightText">
          Choose the plan that fits your athletic journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`rounded-2xl shadow-xl p-8 bg-base-200 text-base-content border transition duration-300 ${
              plan.highlight ? "border-[#f95f35] scale-[1.03]" : "border-base-300"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#f95f35]">{plan.name}</h3>
            <p className="text-4xl font-extrabold mb-6 text-[#f95f35]">{plan.price}</p>

            <ul className="space-y-2 mb-8 text-lightText">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ <span>{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn w-full text-white ${
                plan.highlight
                  ? "bg-[#f95f35] hover:bg-orange-600"
                  : "bg-gray-700 hover:bg-gray-800"
              }`}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
