import HeroSection from "../ServicesQA/HeroSection"
import ManualTesting from "../ServicesQA/ManualTesting"
import AutomationTesting from "../ServicesQA/AutomationTesting"
import WhyUs from "../ServicesQA/WhyUs"
import CTA from "../ServicesQA/cta"
function index() {  
  return (
<>
     <HeroSection />
    <ManualTesting />
    <AutomationTesting />
    <WhyUs />
    <CTA />
    </>
  )
}

export default index