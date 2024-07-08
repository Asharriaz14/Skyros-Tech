
import { useState , useEffect } from "react";
import Modal from "./Modal";
import {motion }from 'framer-motion'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    
    <div className="max-w-7xl mx-auto pt-10 px-6 text-center flex flex-col items-center mt-6 lg:mt-10">
        <div className="absolute top-0 right-0 z-[-1]">
    <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
    <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
    <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
    <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_25:217)" />
    <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_25:217)" />
    <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)" stroke="url(#paint5_linear_25:217)" />
    <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362" transform="rotate(133.319 191.659 302.659)" fill="url(#paint6_linear_25:217)" />
    <defs>
    <linearGradient id="paint0_linear_25:217" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" />
    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
    </linearGradient>
    <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
    <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
    </radialGradient>
    <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
    <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
    </radialGradient>
    <linearGradient id="paint3_linear_25:217" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" />
    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
    </linearGradient>
    <linearGradient id="paint4_linear_25:217" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" />
    <stop offset="1" stopColor="white" stopOpacity="0" />
    </linearGradient>
    <linearGradient id="paint5_linear_25:217" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" />
    <stop offset="1" stopColor="white" stopOpacity="0" />
    </linearGradient>
    <linearGradient id="paint6_linear_25:217" x1="118.524" y1="29.2497" x2="166.965" y2="338.63" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" />
    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
    </linearGradient>
    </defs>
    </svg>
    </div>
    <div className="absolute bottom-0 left-0 z-[-1]">
    <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24" stroke="url(#paint0_linear_25:218)" />
    <path d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24" stroke="url(#paint1_linear_25:218)" />
    <path d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24" stroke="url(#paint2_linear_25:218)" />
    <path d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481" stroke="url(#paint3_linear_25:218)" />
    <circle opacity="0.8" cx="214.505" cy="60.5054" r="49.7205" transform="rotate(-13.421 214.505 60.5054)" stroke="url(#paint4_linear_25:218)" />
    <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
    <defs>
    <linearGradient id="paint0_linear_25:218" x1="184.389" y1="69.2405" x2="184.389" y2="212.24" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" stopOpacity="0" />
    <stop offset="1" stopColor="#4A6CF7" />
    </linearGradient>
    <linearGradient id="paint1_linear_25:218" x1="156.389" y1="69.2405" x2="156.389" y2="212.24" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" stopOpacity="0" />
    <stop offset="1" stopColor="#4A6CF7" />
    </linearGradient>
    <linearGradient id="paint2_linear_25:218" x1="125.389" y1="69.2405" x2="125.389" y2="212.24" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" stopOpacity="0" />
    <stop offset="1" stopColor="#4A6CF7" />
    </linearGradient>
    <linearGradient id="paint3_linear_25:218" x1="93.8507" y1="67.2674" x2="89.9278" y2="210.214" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" stopOpacity="0" />
    <stop offset="1" stopColor="#4A6CF7" />
    </linearGradient>
    <linearGradient id="paint4_linear_25:218" x1="214.505" y1="10.2849" x2="212.684" y2="99.5816" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4A6CF7" />
    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
    </linearGradient>
    <radialGradient id="paint5_radial_25:218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 63) rotate(90) scale(43)">
    <stop offset="0.145833" stopColor="white" stopOpacity="0" />
    <stop offset="1" stopColor="white" stopOpacity="0.08" />
    </radialGradient>
    </defs>
    </svg>
    </div>

      <motion.h1 
      initial={{x:-100, opacity:0}}
      animate={{x:0 , opacity:1}}
      transition={{delay:0.4, 
        x:{type:"spring" , stiffness:60},
        opacity:{duration:1},
        ease:"easeIn",
        duration:3,
      }}
      className="text-4xl sm:text-6xl lg:text-7xl font-medium items-center tracking-wide text-[#49507B]">
      Welcome to Skyros
      </motion.h1>
      <motion.p 
        initial={{x:-100, opacity:0}}
        animate={{x:0 , opacity:1}}
        transition={{delay:0.4, 
          x:{type:"spring" , stiffness:60},
          opacity:{duration:1},
          ease:"easeIn",
          duration:3,
        }} className="mt-10 text-lg text-center text-neutral-500 max-w-4xl  sm:text-6xl lg:text-4xl font-medium ">
        Where Innovation Meets Excellence!    
      </motion.p>
      <motion.p 
        initial={{x:-100, opacity:0}}
        animate={{x:0 , opacity:1}}
        transition={{delay:0.4, 
          x:{type:"spring" , stiffness:60},
          opacity:{duration:1},
          ease:"easeIn",
          duration:3,
        }}
      className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        At Skyros, we are dedicated to providing comprehensive Quality Assurance (QA) services tailored to meet your needs. Whether you require manual testing, automation testing, or a combination of both, our experienced team is here to ensure the highest standards of quality for your software products.
      </motion.p>

      <motion.div
        initial={{x:-100, opacity:0}}
        animate={{x:0 , opacity:1}}
        transition={{delay:0.4, 
          x:{type:"spring" , stiffness:60},
          opacity:{duration:1},
          ease:"easeIn",
          duration:3,
        }}
      className="my-10">
      
            {showModal && < Modal onClose ={() => setShowModal(false)} />}
            <button  onClick={() => setShowModal(true)}
    className="animate-bounce focus:animate-none hover:bg-[#111827] hover:animate-none text-center items-center text-md font-medium bg-[#4A6CF7] py-4  px-5 mt-3  rounded-lg tracking-wide text-white">
    <span className="ml-2">Contact Us ✉️</span>
</button>
      </motion.div>


      <div className="my-6">
<div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
    <div>
        <h1 className="text-3xl font-extrabold">Let`s Talk</h1>
        <p className="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help? Then reach out we`d love to hear about your project  and provide help.</p>
        <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
                <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                            viewBox="0 0 479.058 479.058">
                            <path
                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                data-original="#000000" />
                        </svg>
                    </div>
                    <a target="blank" href="https://veilmail.io/e/FkKh7o" className="text-[#007bff] text-sm ml-3">
                        <small className="block">Mail</small>
                        <strong>https://veilmail.io/e/FkKh7o</strong>
                    </a>
                </li>
            </ul>
        </div>
        <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                            viewBox="0 0 24 24">
                            <path
                                d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                data-original="#000000" />
                        </svg>
                    </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                            viewBox="0 0 511 512">
                            <path
                                d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                data-original="#000000" />
                        </svg>
                    </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                            viewBox="0 0 24 24">
                            <path
                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                            </path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  
    <form className="ml-auo space-y-4">
        <input type='text' placeholder='Name'
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
        <input type='email' placeholder='Email'
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
        <input type='text' placeholder='Subject'
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
        <textarea placeholder='Message' rows="6"
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
        <button type='button'
            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
    </form>
</div>
</div>  
    </div>



  )
}

export default Contact