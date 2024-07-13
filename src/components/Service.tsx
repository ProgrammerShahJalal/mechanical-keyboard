import { AnimatePresence, motion } from "framer-motion";
import services from "../data/services.json";
import { useState } from "react";
import {
  FaShippingFast,
  FaDollarSign,
  FaHeadset,
  FaShieldAlt,
  FaBoxOpen,
} from "react-icons/fa";

const icons = {
  FaShippingFast,
  FaDollarSign,
  FaHeadset,
  FaShieldAlt,
  FaBoxOpen,
};

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const Service = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.div
                key={item.id}
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={cardVariants}
              >
                {Icon ? (
                  <Icon
                    className={`text-6xl mb-4 ${
                      (item.id === "service-1" && "text-blue-500") ||
                      (item.id === "service-2" && "text-green-500") ||
                      (item.id === "service-3" && "text-pink-500")
                    }`}
                  />
                ) : (
                  <div className="text-6xl mb-4">❓</div> // Fallback for undefined icons
                )}
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  layoutId={`title-${item.id}`}
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  className="text-gray-700"
                  layoutId={`description-${item.id}`}
                >
                  {item.sub}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={() => setSelectedId(null)}
            >
              {services.map(
                (item) =>
                  item.id === selectedId && (
                    <motion.div
                      key={item.id}
                      layoutId={item.id}
                      className="flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-md"
                    >
                      <item.icon />
                      <motion.h3
                        className="text-2xl font-semibold text-gray-900 mb-4"
                        layoutId={`title-${item.id}`}
                      >
                        {item.name}
                      </motion.h3>
                      <motion.p
                        className="text-gray-700 mb-4 w-96"
                        layoutId={`description-${item.id}`}
                      >
                        {item.description}
                      </motion.p>
                      <motion.button
                        className={`px-4 py-2 bg-blue-700 text-white rounded-md `}
                        onClick={() => setSelectedId(null)}
                      >
                        Close
                      </motion.button>
                    </motion.div>
                  )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Service;
