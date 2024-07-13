import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaToggleOn,
  FaKeyboard,
  FaPalette,
  FaMicrochip,
  FaLayerGroup,
} from "react-icons/fa";
import useMultipleInView from "./hooks/useMultipleInView";

const CustomizableOptions = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  // Use multiple in view for both list items and paragraph
  const [liRefs, liInView] = useMultipleInView(5); // Adjust the count to match the number of list items
  const [pRefs, pInView] = useMultipleInView(1); // For the single paragraph

  return (
    <section className="container mx-auto p-8 my-10">
      <motion.h2
        ref={titleRef}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Customizable Options
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 leading-relaxed">
        <div>
          <ul className="list-disc list-inside mb-4">
            <motion.li
              ref={liRefs[0]}
              initial={{ opacity: 0, y: 50 }}
              animate={liInView[0] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-2 flex items-center"
            >
              <FaKeyboard className="text-blue-500 text-6xl mr-2" />
              <span>
                <strong>Switch Types:</strong> Choose from a variety of switches
                such as linear, tactile, or clicky, each offering a different
                feel and sound.
              </span>
            </motion.li>
            <motion.li
              ref={liRefs[1]}
              initial={{ opacity: 0, y: 50 }}
              animate={liInView[1] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-2 flex items-center"
            >
              <FaMicrochip className="text-green-500 mr-2 text-6xl" />
              <span>
                <strong>Keycap Materials:</strong> Keycaps come in various
                materials, including ABS and PBT, each with its own texture and
                durability.
              </span>
            </motion.li>
            <motion.li
              ref={liRefs[2]}
              initial={{ opacity: 0, y: 50 }}
              animate={liInView[2] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-2 flex items-center"
            >
              <FaPalette className="text-yellow-500 mr-2 text-6xl" />
              <span>
                <strong>Backlighting:</strong> Customize the backlighting with
                various colors and effects to match your setup or mood.
              </span>
            </motion.li>
          </ul>
        </div>
        <div>
          <ul className="list-disc list-inside mb-4">
            <motion.li
              ref={liRefs[3]}
              initial={{ opacity: 0, y: 50 }}
              animate={liInView[3] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-2 flex items-center"
            >
              <FaToggleOn className="text-purple-500 mr-2 text-8xl" />
              <span>
                <strong>Macros and Programmable Keys:</strong> Many mechanical
                keyboards offer programmable keys and macros, allowing users to
                create shortcuts for complex commands and actions.
              </span>
            </motion.li>
            <motion.li
              ref={liRefs[4]}
              initial={{ opacity: 0, y: 50 }}
              animate={liInView[4] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="mb-2 flex items-center"
            >
              <FaLayerGroup className="text-red-500 mr-2 text-7xl" />
              <span>
                <strong>Layouts:</strong> Mechanical keyboards come in different
                layouts such as tenkeyless, 60%, and full-size, catering to
                different space and functionality needs.
              </span>
            </motion.li>
          </ul>
          <motion.p
            ref={pRefs[0]}
            initial={{ opacity: 0, y: 50 }}
            animate={pInView[0] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Customizable options make mechanical keyboards not only functional
            but also a unique extension of your personal style.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CustomizableOptions;
