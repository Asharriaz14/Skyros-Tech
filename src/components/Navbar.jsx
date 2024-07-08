import PropTypes from 'prop-types';
import logo from "../assets/Skyroslogo.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ setScrollToFeature }) => {
  const [showModal, setShowModal] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFeatureClick = (event) => {
    event.preventDefault();
    setScrollToFeature(true);
    navigate("/");
  };

  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setShowModal(true), 100); 
  };

  return (
    <nav className={`sticky top-0 z-50 py-5 ${isSticky ? 'backdrop-blur-lg border-b' : 'bg-transparent'}`}>
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to={"/"} onClick={handleHomeClick} >
              <img src={logo} alt="logo" className="h-10 mr-2" />
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-[#49507B]">
  {navItems.map((item, index) => (
    <li key={index}>
      {item.to.startsWith('#') ? (
        <ScrollLink
          to={item.to.substring(1)} // Remove the '#' from `item.to`
          smooth={true}
          duration={500}
          className={`hover:cursor-pointer ${scroll.getActiveLink() === item.to ? "text-red-900" : ""}`}
        >
          {item.label}
        </ScrollLink>
      ) : (
        <Link 
          to={item.to} 
          className={`hover:cursor-pointer ${location.pathname === item.to ? "text-primary underline font-bold" : ""}`} 
          onClick={item.label === "Feature" ? handleFeatureClick : null}
        >
          {item.label}
        </Link>
      )}
    </li>
  ))}
</ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button onClick={handleContactClick} className="animate-bounce focus:animate-none hover:animate-none text-center items-center text-md font-medium bg-[#4A6CF7] py-3 px-3 rounded-lg tracking-wide text-white hover:bg-[#111827]">
              Contact Us
            </button>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
          </div>
          <div className="lg:hidden flex justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className=" top-0 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  {item.to.startsWith('#') ? (
                    <ScrollLink to={item.to.substring(1)} smooth={true} duration={500}>
                      {item.label}
                    </ScrollLink>
                  ) : (
                    <Link 
                      to={item.to} 
                      onClick={item.label === "Feature" ? handleFeatureClick : null}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button onClick={handleContactClick} className="animate-bounce focus:animate-none hover:animate-none text-center items-center text-md font-medium bg-[#4A6CF7] py-3 px-3 rounded-lg tracking-wide text-white hover:bg-[#111827]">
                Contact Us
              </button>
              {showModal && <Modal onClose={() => setShowModal(false)} />}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setScrollToFeature: PropTypes.func.isRequired,
};

export default Navbar;
