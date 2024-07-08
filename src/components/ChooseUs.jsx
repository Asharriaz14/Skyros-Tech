
import ChooseImg from '../assets/chooseUs.png';
import {motion} from 'framer-motion'
export default function ChooseUs() {
  return (
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
     <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center p-8 tracking-wide font-semibold text-[#090E34]">
     Why Skyros
       </h2>
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <motion.img
             initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }} // Adjust 'amount' as needed
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              duration: 3,
              ease: "easeIn"
            }}
              src={ChooseImg}
              alt="Nuxt development illustration"
              loading="lazy"
              width=""
              height=""
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
          }} className="md:w-7/12 lg:w-6/12">
            <p className="mt-6 text-gray-600">
              At Skyros, quality is not just a goal – its our obsession. Our commitment to excellence drives us to go above and beyond in ensuring that every project we undertake meets the highest standards. With years of experience, our team of seasoned professionals brings unparalleled knowledge and expertise to tackle even the most complex IT challenges. We believe that quality is the cornerstone of success, and this belief is embedded in every aspect of our work. From meticulous planning to flawless execution, we leave no stone unturned in our quest to deliver exceptional results.
            </p>
            <p className="mt-4 text-gray-600">
              We are more than just service providers; we are your strategic partners in achieving success. Our relationship with clients goes beyond the transactional. We invest time in understanding your unique needs and objectives, ensuring that our solutions are perfectly aligned with your goals. From the initial consultation to post-project support, we are with you every step of the way. Our comprehensive approach ensures that you receive not only top-notch technical solutions but also the support and guidance needed to maximize their impact. At Skyros, your success is our mission, and we are dedicated to making it a reality.
            </p>
          </motion.div>
        </div>
      </div>
  )
}
