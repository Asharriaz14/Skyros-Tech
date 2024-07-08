import { BotMessageSquare } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { 
    label: "Home", 
    to: "/", 
    onClick: () => {
      window.location.reload(); // Refresh the page when clicking on "Home"
    }
  },
  { 
    label: "About", 
    to: "/About", 
  },
  { 
    label: "Feature", 
    to: "/#Feature", 
    onClick: (navigate, setScrollToFeature) => {
      setScrollToFeature(true); // Set state to scroll to feature
      navigate("/"); // Navigate to home page
    }
  },
  // { label: "Testimonial", to: "#Testimonial" },
];


export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "QA and Automation",
    description: "Efficient QA and automation services streamline workflows, optimizing processes effortlessly. Let us simplify complexities, enhancing efficiency and effectiveness seamlessly.",
    link: "Learn More",
    to: "/QA" 
  },
  {
    icon: <Fingerprint />,
    text: "Healthcare Integration",
    description: "Seamlessly integrate healthcare systems with tailored solutions. From EMR integration to interoperability, comprehensive coverage ensures seamless integration.",
    link: "Learn More",
    to: "/Healthcare" 
  },
  {
    icon: <ShieldHalf />,
    text: "Bespoke Development",
    description: "Unique business solutions tailored to exact specifications. Our bespoke development ensures perfect fits every time, meeting your business needs effectively.",
    link: "Learn More",
    to: "/bespoke"
  }
];


export const checklistItems = [
  {
    title: "Expertise in Healthcare Integration Solutions",
    description:
      "Specialize in HL7, FHIR, CCDA, XML, and more for healthcare integration since 2011.",
  },
  {
    title: "Leadership in IT Solutions",
    description:
      "Leading the way in IT solutions, consistently pushing boundaries and setting industry standards..",
  },
  {
    title: "Commitment to Innovation and Excellence",
    description:
      "Dedication to innovation reflected in sleek, dynamic website and cutting-edge solutions for enhanced user experience",
  },
  {
    title: "Comprehensive Services",
    description:
      "Offering services to optimize QA processes, streamline healthcare integration, and support new IT projects",
  },
];


export const resourcesLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/About" },
  // { label: "Contact", to: "/Contact" },
];

export const platformLinks = [
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Term & Conditions" },
];

export const communityLinks = [
  { label: "", text: "skyros@skyros.com"},
  { label: "", text: "Ph: +92 321 1234567"}
];


export const manualTesting = [
  {
    title: "Functional Testing",
    description:
      "Verifying that each function of the software operates in accordance with the specified requirements.",
  },
  {
    title: "User Interface (UI) Testing",
    description:
      "Assessing the visual elements and usability of the software to enhance user experience",
  },
  {
    title: "Compatibility Testing",
    description:
      "Ensuring compatibility across different browsers, operating systems, and devices.",
  },
  {
    title: "Regression Testing",
    description:
      "Detecting any unintended changes in software functionality after modifications or updates.",
  },
  {
    title: "Exploratory Testing",
    description:
      "Uncovering hidden defects and potential issues through ad-hoc testing techniques.",
  },
];

export const automationTesting = [
  {
    title: "Test Automation Framework Development",
    description:
      "Designing custom test automation frameworks to suit your unique software architecture and testing needs.",
  },
  {
    title: "Script Development and Execution",
    description:
      "Creating automated test scripts to validate software functionality, performance, and scalability.",
  },
  {
    title: "Continuous Integration and Deployment (CI/CD) Integration",
    description:
      "Seamlessly integrating automated testing into your CI/CD pipelines for rapid and reliable software delivery.",
  },
  {
    title: "Maintenance and Support:",
    description:
      "Providing ongoing maintenance and support to ensure the longevity and effectiveness of your automated testing solutions.",
  },
];

export const whyUs = [
  {
    title: "Expertise",
    description:
      "Our seasoned QA professionals possess extensive domain knowledge and technical expertise to deliver superior testing solutions.",
  },
  {
    title: "Customized Approach",
    description:
      "We tailor our QA services to align with your project requirements, budget constraints, and timeline.",
  },
  {
    title: "Proven Methodologies",
    description:
      "Leveraging industry best practices and proven methodologies, we ensure consistent and reliable results.",
  },
  {
    title: "Scalability",
    description:
      "Whether you're a startup or a Fortune 500 company, our scalable QA services can accommodate projects of any size and complexity.",
  },
  {
    title: "Client-Centric Focus",
    description:
      "Whether you're a startup or a Fortune 500 company, our scalable QA services can accommodate projects of any size and complexity.We prioritize client satisfaction and strive to exceed expectations by delivering high-quality, cost-effective solutions.",
  }
];

export const Healthcares = [
  {
    title: "EMR to HIE Integration",
    description:
  "Facilitate secure and efficient exchange of patient health information between Electronic Medical Records (EMRs) and Health Information Exchanges (HIEs). Our integration solutions ensure real-time access to patient data, promoting collaboration among healthcare providers and enhancing care coordination",
    },
  {
    title: "EMR to LIS Integration",
    description:
    "Integrate EMRs with Laboratory Information Systems (LIS) to automate the flow of laboratory test orders and results. By eliminating manual data entry and reducing errors, our integration solutions enhance laboratory workflow efficiency and accelerate diagnostic processes.",
  },
  {
    title: "EMR to PACS Integration",
    description:
"Connect EMRs with Picture Archiving and Communication Systems (PACS) to enable seamless access to medical imaging data such as X-rays, MRIs, and CT scans. Our integration solutions empower healthcare providers to retrieve, view, and manage imaging studies directly within their EMR systems, improving diagnostic accuracy and patient care.",
  },
  {
    title: "EMR to Pharmacy Integration",
    description:
"Streamline medication management and prescription workflows by integrating EMRs with pharmacy systems. Our integration solutions enable healthcare providers to electronically transmit prescriptions, verify medication histories, and receive refill requests, enhancing medication adherence and patient safety.",
 },
  {
    title: "EMR to Telehealth Providers Integration",
    description:
    " Facilitate remote patient monitoring and virtual care delivery by integrating EMRs with telehealth platforms and providers. Our integration solutions enable seamless exchange of patient data, video consultations, and remote monitoring data, empowering healthcare organizations to expand their telehealth capabilities and reach a wider patient population.",
  }
];

export const ToolsTechnologies = [
  {
    title: "Mirth Connect",
    description:
    "A robust open-source integration engine for healthcare data exchange and interoperability.",
    },
  {
    title: "Rhapsody Integration Engine",
    description:
    "A scalable and flexible integration platform designed for healthcare organizations to streamline data connectivity and workflow automation.",
  },
  {
    title: "Bridgegate",
    description:
    "An advanced integration solution for seamless interoperability between EMRs and various healthcare systems and applications.",
  },
];

export const WhyHealthcareServices = [
  {
    title: "Specialized Expertise",
    description:
    "Our team of healthcare integration experts possesses deep domain knowledge and technical proficiency to deliver customized integration solutions that meet the unique needs of your organization.",
  },
  {
    title: "Proven Track Record",
    description:
    "With a proven track record of successful implementations, we have helped numerous healthcare organizations achieve seamless data exchange and interoperability across their IT ecosystems.",
  },
  {
    title: "Scalability",
    description:
    "Whether you're a small clinic or a large healthcare system, our scalable integration solutions can accommodate organizations of any size and complexity",
  },
  {
    title: "Compliance and Security'",
    description:
    "We adhere to industry standards and regulations such as HL7, FHIR, HIPAA, and GDPR to ensure the confidentiality, integrity, and availability of patient health information.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We are committed to exceeding client expectations by providing responsive support, ongoing maintenance, and continuous optimization to maximize the value of our integration solutions.",
  }
];