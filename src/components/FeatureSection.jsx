
import { features } from "../constants"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const FeatureSection = () => {
    return (
      <div className="relative mt-10 lg:mt-10  px-8 min-h-[500px] " id="Feature">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl p-4 tracking-wide font-semibold text-[#090E34]">
            Skyros Solutions and Services
          </h2>
        </div>
        <motion.div 
         initial={{ y: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true, amount: 0.1 }} 
         transition={{
           delay: 0.4,
           x: { type: "spring", stiffness: 60 },
           opacity: { duration: 1 },
           duration: .6,
           ease: "easeIn"
         }}
        className="flex flex-wrap mt-10  ">
          {features.map((feature, index) => (
            <div
            className="max-w-sm p-6 bg-[#F9FAFF] border  md:mx-4 border-gray-200 rounded-lg shadow    hover:cursor-pointer  hover:shadow-2xl cursor-pointer hover:scale-105 xl:hover:scale-110 transition ease-in-out duration-500" key={index}>
              <div className="flex items-center mb-3">
                {feature.icon}
                <Link to={feature.to} className="ml-3">
                  <h5 className="mb-0 text-2xl font-semibold tracking-tight text-gray-900">{feature.text}</h5>
                </Link>
              </div>
              <p className="mb-3 text-gray-500">{feature.description}</p>
              <Link to={feature.to}  className="relative w-2/4 group overflow-hidden px-6 h-12 rounded-lg  flex space-x-2 items-center bg-[#4A6CF7] hover:bg-[#111827]">
                <span className="relative text-sm text-white "> {feature.link}</span>
                <div className="flex items-center -space-x-3 translate-x-3">
                  <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            
            </div>
          ))}
        </motion.div>
      </div>
    );
  }
  
  

export default FeatureSection