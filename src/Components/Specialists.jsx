import React from "react";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";
import SpecialistImg from "../assets/specialist.jpg";
import SpecialistImg1 from "../assets/specialist2.jpg";
import SpecialistImg2 from "../assets/specialist3.png";
import { Link } from "react-router-dom";

const Specialists = () => {
  const specialist = [
    {
      id: 1,
      name: "Dr.Sakthi B.Optom(OD), Fellowship in Neuro-Visual Rehabilitation ",
      role: "Chief Optometrist",
      bio: "Dr.Sakthi leads the vision care team with expertise in binocular vision therapy, neuro-visual rehabilitation, and low vision aids. She focuses on holistic care for patients with squint, nerve-related vision issues, and irreversible vision loss.",
      image: SpecialistImg1,
      rating: 5,
      special: ["Squint", "Neuro-visual Disorders", "Low vision"],
    },
    {
      id: 2,
      name: "Dr.Arjun MBBS, MS Ophthalmology (Fellowship retina)",
      role: "Senior Ophthamologist",
      bio: "He is a dedicated eye specialist at Divine Vision Centre. He specializes in treating retinal disorders, cataract surgeries, and corneal diseases. With expertise in advanced surgical techniques, he ensures high success rates and patient comfort.Dr. Arjun is known for his precise diagnostics and compassionate care.",
      image: SpecialistImg,
      rating: 4,
      special: ["Retina specialist", "Cataract", "Cornea"],
    },
    {
      id: 3,
      name: "Dr.Ravi MBBS,MS (Ophthamology), Fellowship in Glaucoma",
      role: "Consultant Ophthamologist",
      bio: "A dedicated glaucoma specialist with advanced training in early detection, medical and surgical management of all types of glaucoma. Dr.Ravi focuses on children’s vision problems, amblyopia therapy, and squint detection. He also manages Computer Vision Syndrome.",
      image: SpecialistImg2,
      rating: 5,
      special: ["Glaucoma", "Pediatric eye care", "Digital-vision"],
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400 inline" aria-hidden="true" />
      ) : (
        <FaRegStar
          key={i}
          className="text-yellow-400 inline"
          aria-hidden="true"
        />
      )
    );
  };

  return (
    <section
      id="specialists"
      className="py-20 overflow-hidden bg-gradiant-to-r from-pink-100 bg-purple-100"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <span
            className="absolute -top-10 left-1/3  transform -translate-x-1/2 w-20 h-20
                rounded-full bg-pink-400 opacity-30 z-0"
            aria-hidden="true"
          ></span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            Meet Our<span className="text-pink-600"> Expert Team</span>
          </h2>
          <p className="text-lg text-gray-600  max-w-4xl mx-auto relative z-10">
            Eye experts are specialist who diagnose and treat vision problems
            and eye disease.They conduct eye exams, prescribe glasses or contact
            lenses, and offer medical or surgical treatments.Their role is
            crusial in maintaining good eye health and preventing vission
            loss.Regular check-ups with an eye expert help detect eye issues
            early for better outcomes.
          </p>
          <span
            className="absolute -bottom-6 right-1/4 w-16 h-16 rounded-full bg-purple-300
                opacity-20 z-0"
            aria-hidden="true"
          ></span>
        </header>
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-8 mb-16"
        >
          {specialist.map((doctor) => (
            <li key={doctor.id} className="group relative">
              <article
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl
                            transition-all duration-300 h-full"
              >
                <figure className="relative h-80 overflow-hidden ">
                  <img
                    src={doctor.image}
                    className="w-full h-full object-cover transition-transform duration-500
                                group-hover:scale-105 "
                    loading="lazy"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    aria-hidden="true"
                  ></span>
                  <aside
                    className="absolute top-4 right-4 bg-white/90 px-3 py-1
                                rounded-full flex items-center shadow-sm"
                    aria-label={`Rating:${doctor.rating}stars`}
                  >
                    {renderStars(doctor.rating)}
                    <span className="ml-1 text-sm font-medium">
                      {doctor.rating}
                    </span>
                  </aside>
                </figure>
                <div className="p-6 relative -mt-10">
                  <div className="bg-pink-200 rounded-lg shadow-md p-6">
                    <header>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-pink-600 font-medium mb-3">
                        {doctor.role}
                      </p>
                    </header>
                    <p className="text-gray-600 mb-4">{doctor.bio}</p>
                    <ul className="flex flex-wrap gap-3 mb-4">
                      {doctor.special.map((spec, i) => (
                        <li key={i}>
                          <span className="bg-white text-pink-600 text-xs font-medium px-4 py-1 rounded-full">
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <figure
                      className="absolute -top-6 left-6 text-white bg-pink-700 p-3 rounded-full shadow-lg"
                      aria-label="true"
                    >
                      <FaQuoteLeft className="text-lg" />
                    </figure>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <aside
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-gradient-to-r from-pink-100 to-purple-100
            rounded-2xl p-8 md:p-12 text-center realative overflow-hidden"
        >
          <span
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-pink-300 opacity-20"
            aria-hidden="true"
          ></span>
          <span
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-pink-300 opacity-20"
            aria-hidden="true"
          ></span>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to consult with our Specialists
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to consult our specialists ? Get expert eye care and
              personalized treatment for all your vision needs.
            </p>
            <nav className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/appointments"
                className="bg-pink-600  hover:bg-pink-700 text-white px-8 py-3 rounded-full
                            transition shadow-lg focus:outline focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
                aria-label="Book a consultation"
              >
                Schedule your visit
              </Link>
              <Link
                to="/contact"
                className="border border-pink-600  hover:bg-pink-50 text-pink-600 px-8 py-3 rounded-full
                            transition shadow-lg focus:outline focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Specialists;
