import { resourcesLinks, platformLinks , communityLinks } from "../constants"
import { Facebook } from "lucide-react"
import { Instagram } from "lucide-react"
import { Twitter  } from "lucide-react"
import { Linkedin } from "lucide-react"
import logo from "../assets/Skyroslogo.png";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
   
      <footer className="md:px-14 p-1 max-w-screen-2xl mx-auto text-[#090E34] bg-[#F6F8FF]">
      <div className="my-12 flex flex-col md:flex-row gap-10"> 
          <div className="md:w-1/2 space-y-8">
          <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
              <img src={logo} alt="Skyros Logo" className='w-2/4 d-inline-block item-center' />
          </a>
          </div>
         
     
          <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8   lg:text-center items-start ">
              <div className="spcae-y-4 mt-5">
          <h4 className="text-lg font-medium">Legal</h4>
          <ul className="space-y-3 my-5">
          {platformLinks.map((link,index) => (
                        <li key={index}>
                            <a className="text-[#090E34] hover:text-[#4A6CF7] text-sm" href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
          </ul>
              </div>
              <div className="spcae-y-4 mt-5">
          <h4 className="text-lg font-medium">Resourse</h4>
          <ul className="space-y-3 my-5">
          {resourcesLinks.map((link,index) => (
                        <li key={index}>
                            <Link className="text-[#090E34] hover:text-[#4A6CF7]   hover:cursor-pointer text-sm" to={link.to}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
          </ul>
              </div>
              <div className="spcae-y-4 mt-5">
          <h4 className="text-lg font-medium">Information</h4>
          <ul className="space-y-3 my-5">
          {communityLinks.map((link,index) => (
                        <li key={index}>
                            <a className="text-[#090E34] hover:text-[#4A6CF7]  text-sm" href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
          </ul>
              </div>
          </div>
      </div>

      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
          <p className="flex text-md"> © 2024-SKYROSTECH. All Rights Reserved.</p>
          <div className="flex items-center space-x-5">
          <Facebook className='w-8 cursor-pointer hover:text-[#4A6CF7] hover:-translate-y-4 transition-all duration-300 text-[#090E34]' />
      <Instagram className='w-8 cursor-pointer hover:text-[#4A6CF7] hover:-translate-y-4 transition-all duration-300 text-[#090E34]' />
      <Twitter  className='w-8 cursor-pointer hover:text-[#4A6CF7] hover:-translate-y-4 transition-all duration-300 text-[#090E34]' />
      <Linkedin className="w-8 cursor-pointer hover:text-[#4A6CF7] hover:-translate-y-4 transition-all duration-300 text-[#090E34]" />
      </div>
      </div>       
  </footer>
)
}

export default Footer


