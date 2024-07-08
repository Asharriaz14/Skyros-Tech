import teamImage from '../assets/Team.png';
import teamsImage from '../assets/Teams.png';
import {motion} from 'framer-motion'
import { useEffect } from 'react';
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
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
              src={teamImage}
              alt="Nuxt development illustration"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }} // Adjust 'amount' as needed
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              duration: 3,
              ease: "easeIn"
            }}
           className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Our Journey & Expertise
            </h2>
            <p className="mt-6 text-gray-600">
              Established in 2011, Skyros embarked on a mission to emerge as a global leader in information technology solutions. Our founding vision revolves around empowering our clientele to streamline operations, reduce complexities, and drive down costs.
            </p>
            <p className="mt-4 text-gray-600">
              Quality is the cornerstone of Skyros. Our suite of IT offerings encompasses software products, bespoke development, consulting services, security solutions, and cutting-edge image processing solutio
            </p>
            <p className="mt-4 text-gray-600">
            Backed by unwavering confidence in our capabilities, Skyros boasts extensive expertise. From accounting and inventory systems to database automation and image processing, our proficiency spans across diverse industries and sectors. Our seasoned professionals are adept at delivering tailor-made automation projects that meet your exact specifications, on time, within budget, and to the highest quality standards.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
         
          <motion.div
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
          className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Our Commitment
            </h2>
            <p className="my-6 text-gray-600">
              At Skyros, collaboration is our cornerstone. We partner with you to elevate your organization to new heights of maturity. Through continuous process enhancement, we unlock tangible value for our clients. Our mission? To lead the charge in delivering customizable computer network security access management and reporting technology, tailored to organizations of all scales. Every day, we pledge unwavering dedication to you, our esteemed client. Expect nothing less than exceptional products, built to endure and enriched by our warm, accommodating, and trustworthy customer service. With Skyros, reliability is nott just a promise – its a guarantee.
            </p>
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Our Vision
            </h2>
            <p className="my-4 text-gray-600">
              Our vision centers on delivering solutions that empower our clients to streamline the time, intricacy, and expenses associated with managing their network security, MIS solutions, as well as software development and maintenance needs.
            </p>
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Our Approach
            </h2>
            <p className="my-4 text-gray-600">
            We recognize the distinctiveness of every organization, particularly in its operational methodologies. Our commitment lies in comprehending your business ethos and surroundings before proposing a tailored solution
            </p>
         
          </motion.div>
          <div className="md:w-5/12 lg:w-5/12">
            <motion.img
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true, amount: 0.1 }} // Adjust 'amount' as needed
             transition={{
               delay: 0.4,
               x: { type: "spring", stiffness: 60 },
               opacity: { duration: 1 },
               duration: 3,
               ease: "easeIn"
             }}
              src={teamsImage}
              alt="Nuxt development illustration"
              loading="lazy"
              width=""
              height=""
            />
          </div>
        </div>
        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Legal Status of the Company
            </h2>
            <p className="my-4 text-gray-600">
            Skyros operates as a privately held corporation, maintaining office in Islamabad Pakistan.
            </p>
      </div>
      
    </div>
  );
}

export default About;
