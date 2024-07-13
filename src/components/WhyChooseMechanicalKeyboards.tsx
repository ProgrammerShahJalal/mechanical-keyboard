import React from "react";
import { motion, useInView } from "framer-motion";
import { FaKeyboard, FaCogs, FaGamepad, FaCode } from "react-icons/fa";
import useMultipleInView from "./hooks/useMultipleInView";

const WhyChooseMechanicalKeyboards = () => {
  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const [paragraphRefs, paragraphsInView] = useMultipleInView(8);

  return (
    <section className="container mx-auto p-8 mt-10 relative">
      <div className="relative z-10">
        <motion.h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Why Choose Mechanical Keyboards?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-gray-700 leading-relaxed">
          <div className="flex items-start space-x-4">
            <FaKeyboard className="text-9xl text-blue-500" />
            <div>
              <motion.p
                ref={paragraphRefs[0]}
                initial={{ opacity: 0, y: 50 }}
                animate={paragraphsInView[0] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-4"
              >
                Mechanical keyboards offer a superior typing experience compared
                to traditional membrane keyboards. They are known for their
                durability, tactile feedback, and customizable features. Each
                key on a mechanical keyboard uses a separate mechanical switch,
                providing a more satisfying and responsive typing experience.
              </motion.p>
              <motion.p
                ref={paragraphRefs[1]}
                initial={{ opacity: 0, y: 50 }}
                animate={paragraphsInView[1] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="mb-4"
              >
                These keyboards are built to last, with many models rated for
                tens of millions of keystrokes. This makes them ideal for
                gamers, writers, and anyone who spends a lot of time at their
                computer.
              </motion.p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaCogs className="text-9xl text-green-500" />
            <div>
              <motion.p
                ref={paragraphRefs[2]}
                initial={{ opacity: 0, y: 50 }}
                animate={paragraphsInView[2] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-4"
              >
                Additionally, mechanical keyboards often have customizable
                keycaps and switches, allowing users to tailor the feel and look
                of their keyboard to their personal preferences.
              </motion.p>
              <motion.p
                ref={paragraphRefs[3]}
                initial={{ opacity: 0, y: 50 }}
                animate={paragraphsInView[3] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="mb-4"
              >
                Whether you are a professional gamer seeking the fastest
                response times or a programmer looking for a comfortable and
                reliable keyboard, mechanical keyboards provide an unparalleled
                experience.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 text-lg text-gray-700 leading-relaxed">
          <div className="flex items-start space-x-4">
            <FaGamepad className="text-9xl text-red-500" />
            <div>
              <motion.p
                ref={paragraphRefs[4]}
                initial={{ opacity: 0, y: 50 }}
                animate={paragraphsInView[4] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-4"
              >
                Mechanical keyboards are especially popular among gamers due to
                their fast response times and customizable features, which can
                give them a competitive edge in fast-paced games.
              </motion.p>
              <motion.p
                ref={paragraphRefs[5]}
                initial={{ opacity: 0, y: 50 }}
                animate={paragraphsInView[5] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Many models also feature RGB lighting and programmable macros,
                enhancing both the aesthetics and functionality for gaming.
              </motion.p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaCode className="text-9xl text-purple-500" />
            <div>
              <motion.p
                ref={paragraphRefs[6]}
                initial={{ opacity: 0, y: 50 }}
                animate={paragraphsInView[6] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-4"
              >
                For programmers, the tactile feedback and durability of
                mechanical keyboards can significantly improve typing efficiency
                and comfort, making long coding sessions more manageable.
              </motion.p>
              <motion.p
                ref={paragraphRefs[7]}
                initial={{ opacity: 0, y: 50 }}
                animate={paragraphsInView[7] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Custom key mappings and macro functionality can also help
                streamline repetitive tasks, improving overall productivity.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMechanicalKeyboards;
