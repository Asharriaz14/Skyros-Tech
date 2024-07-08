import Modal from "../Modal";
import { useState } from "react";
import {motion} from 'framer-motion'
function Cta() {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div 
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }} 
    transition={{
      delay: 0.4,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      duration: 3,
      ease: "easeIn"
    }}
    className="container mx-auto">
      <div className="rounded-lg bg-[#A0B2FC] text-white p-8 my-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
        <div className="flex flex-col lg:ml-14 xl:ml-28 max-w-sm lg:max-w-xl z-10">
          <h4 className="text-4xl text-center md:text-left font-bold text-white md:pb-2">
            Get Started Today!
          </h4>
          <p className="text-center md:text-left text-white opacity-70 md:pb-6">
            Elevate the quality and reliability of your software products with Skyros comprehensive QA services. Contact us today to discuss your project requirements and learn how we can help you achieve your business objectives.
          </p>
        </div>

        <div className="pt-8 md:pt-0 justify-center lg:ml-auto z-10">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center px-8 py-4 text-center text-sm text-[#4A6CF7] uppercase bg-white font-display rounded-full transition duration-200 hover:bg-[#4A6CF7] hover:text-white"
          >
           
            <span>Contact Us</span>
          </button>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>

        <p className="pt-8 text-xs block md:hidden z-10 text-white">
          consectetur adipiscing elit
        </p>

        <div className="absolute bg-[#E7EBFE] opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
      </div>
    </motion.div>
  );
}

export default Cta;
