import { CheckCircle2 } from "lucide-react";
import oneinabillion from "../assets/oneinabillion.png";
import { checklistItems } from "../constants";
import { motion } from 'framer-motion';

const Workflow = () => {
  return (
    <div className="bg-[#F9FAFF]">
    <div className="mt-20 max-w-6xl mx-auto text-center ">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl py-5   lg:py-10 tracking-wide font-semibold text-[#090E34]">
        Skyros - Your Trusted IT Partner
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <motion.img
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
            src={oneinabillion}
            alt="code"
          />
        </div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }} 
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            duration: 3,
            ease: "easeIn"
          }}
          className="pt-12 w-full lg:w-1/2"
        >
          {checklistItems.map((item, index) => (
            <div className="flex mb-12" key={index}>
              <div className="mx-6 bg-[#090E34] text-white h-9 w-9 p-2 justify-center items-center rounded-full">
                <CheckCircle2 width={20} height={20} />
              </div>
              <div>
                <h5 className="mb-2 text-lg text-left text-[#090E34]">
                  {item.title}
                </h5>
                <p className="text-sm text-left">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Workflow;



