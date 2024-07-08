import { testimonials } from "../constants"
import {motion} from 'framer-motion'

const Testimonials = () => {
  return (
    <div className="bg-[#F9FAFF]">
    <div className="mt-10 tracking-wide text-center max-w-7xl mx-auto lg:my-20">
        <h2 className="text-3xl sm:text-5xl lg:text-5xl mb-10 lg:mb-10 tracking-wide font-semibold text-[#090E34]">
            
            What People are Saying</h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
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
                className="w-full sm:w-1/2 lg:w-1/3 py-2 px-4" key={index}>
                    <div className="bg-netural rounded-md p-6 text-xs border border-netural-800 text-[#090E34] bg-white">
                        <p>
                            {testimonial.text}
                        </p>
                        <div className="flex mt-8 items-center">
                            <img src={testimonial.image} alt={testimonial.user}  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"/>
                        <div className="">
                            <h6>{testimonial.user}</h6>
                            <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                        </div>
                        </div>
                    </div>

                </motion.div>
            ))}

        </div>
    </div>
    </div>
)
}

export default Testimonials