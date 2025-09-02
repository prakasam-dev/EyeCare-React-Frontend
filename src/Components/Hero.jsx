import React from "react";
import Profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const status = [
    { value: "2,500+", label: "Happy clients" },
    { value: "15+", label: "Specialists" },
    { value: "50+", label: "Treatments" },
    { value: "10+", label: "Years" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <article
        className="max-w-screen-xl mx-auto px-4 lg:px-8 sm:px-6 py-14 md:py-20 flex flex-col-reverse lg:flex-row 
      items-center gap-10 lg:gap-20"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <hgroup data-aos="fade-up" data-aos-delay="500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              When eye heal, the world
              <mark className="text-pink-600 bg-transparent">
                {" "}
                become light
              </mark>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Comprehensive diagnostics and treatment for all eye conditions
              with world-class specialists
            </p>
          </hgroup>
          <nav
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row  justify-center 
        lg:justify-start gap-4 mb-8"
          >
            <Link
              to="/ "
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full
            text-center transition shadow-lg"
              aria-label="Book a consultation"
            >
              Schedule your visit
            </Link>
            <Link
              to="/Services"
              className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full
            text-center transition"
              aria-label="Explore our Services"
            >
              Explore Services
            </Link>
          </nav>
          <aside data-aos="fade-up" data-aos-delay="800" className="py-4">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-center ">
              {status.map((status, index) => (
                <li key={index} className="px-2">
                  <strong className="text-2xl font-bold text-pink-600">
                    {status.value}
                  </strong>
                  <small className="block text-sm text-gray-600">
                    {status.label}
                  </small>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <figure
          data-aos="fade-up"
          data-aos-delay="700"
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <span
              className="bg-pink-500 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20"
              aria-hidden="true"
            ></span>
            <span
              className="bg-purple-400 rounded-full w-64 h-64 absolute -bottom-10 -right-10 opacity-20"
              aria-hidden="true"
            ></span>
            <img
              src={Profile}
              alt="eye check profile"
              className="relative z-10 rounded-full shadow-2xl w-full max-w-xs md:max-w-sm object-cover"
              width="400"
              height="400"
              loading="eager"
            />
          </div>
        </figure>
      </article>
    </section>
  );
};

export default Hero;
