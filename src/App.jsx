import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ServicesQA from './components/ServicesQA/index';
import ServicesHealthcare from './components/servicesHealthcare/index';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [scrollToFeature, setScrollToFeature] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar setScrollToFeature={setScrollToFeature} />
          <Home scrollToFeature={scrollToFeature} />
          <Footer />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar setScrollToFeature={setScrollToFeature} />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/QA",
      element: (
        <>
          <Navbar setScrollToFeature={setScrollToFeature} />
          <ServicesQA />
          <Footer />
        </>
      ),
    },
    {
      path: "/Healthcare",
      element: (
        <> 
          <Navbar setScrollToFeature={setScrollToFeature} />
          <ServicesHealthcare />
          <Footer />
        </>
      ),
    },
    {
      path: "/Feature",
      element: (
        <>
          <Navbar setScrollToFeature={setScrollToFeature} />
          <Home scrollToFeature={scrollToFeature} />
          <Footer />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar setScrollToFeature={setScrollToFeature} />
          <Contact />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
