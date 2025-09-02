import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Hero from "./Components/Hero";
import ServicesList from "./Components/ServicesList";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Specialists from "./Components/Specialists";
import RoutineEyeCheckup from "./Components/Servicedetails/RoutineEyeCheckup";
import CataractServices from "./Components/Servicedetails/CataractServices";
import CongenitalTypes from "./Components/Servicedetails/CongenitalTypes";
import AcquiredTypes from "./Components/Servicedetails/AcquiredTypes";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<ServicesList />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialist" element={<Specialists />} />
        <Route path="/contact" element={<Contact />} />

        {/* Learn More pages for services */}
        <Route
          path="/services/routine-eye-checkup"
          element={<RoutineEyeCheckup />}
        />
        <Route path="/services/cataract" element={<CataractServices />} />

        {/* Subpages inside CataractServices */}
        <Route
          path="/services/cataract/congenital"
          element={<CongenitalTypes />}
        />
        <Route path="/services/cataract/acquired" element={<AcquiredTypes />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
