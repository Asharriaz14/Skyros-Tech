import { whyUs } from "../../constants"
import { motion } from "framer-motion"
function WhyUs() {
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
        }} className="relative mt-10 lg:mt-10  px-8 min-h-[500px] bg-[#F9FAFF]">
        <div className="text-center">
            <h2 className="text-3xl sm:text-2xl lg:text-4xl p-8 tracking-wide font-semibold text-[#090E34]">
              WHY CHOOSE US
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-4">
          {whyUs.map((us, index) => (
            <div className="max-w-sm p-6 bg-white border my-2 md:mx-4 border-gray-200 rounded-lg shadow" key={index}>
              <div className="flex items-center mb-3">
                  <h5 className="mb-0  text-2xl font-semibold tracking-tight text-gray-900">{us.title}</h5>
              </div>
              <p className="mb-3 text-gray-500">{us.description}</p>
             
            </div>
          ))}
        </div>
      </motion.div>
  
    )
}

export default WhyUs