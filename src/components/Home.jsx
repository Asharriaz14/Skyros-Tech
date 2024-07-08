import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import Workflow from "./Workflow";
import ChooseUs from "./ChooseUs";
import Testimonials from "./Testimonials";
import { CircleArrowUp } from "lucide-react";

const Home = ({ scrollToFeature }) => {
  const featureRef = useRef(null);

  useEffect(() => {
    if (scrollToFeature && featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToFeature]);

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="">
      <HeroSection />
      <Workflow />
      <div ref={featureRef}>
        <FeatureSection id="Feature" />
      </div>
      <Testimonials id="Testimonal" />
      <ChooseUs />
      <button onClick={onTop} className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg">
        <CircleArrowUp />
      </button>
    </div>
  );
};

Home.propTypes = {
  scrollToFeature: PropTypes.bool.isRequired,
};

export default Home;
