import HeroSection from "../servicesHealthcare/HeroSection"
import HealthcareSection from "../servicesHealthcare/HealthcareSection"
import Tools from "../servicesHealthcare/tools"
import WhyHealthcareService from "../servicesHealthcare/WhyHealthcareService"
import CTA from "../ServicesQA/cta"
function index() {
  return (
<>
     <HeroSection />
     <HealthcareSection />
     <Tools />
     <WhyHealthcareService />
     <CTA />
    </>
  )
}

export default index