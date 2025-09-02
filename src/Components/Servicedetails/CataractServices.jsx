import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CataractServices = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/cataract-service-details.json`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching cataract data:", err));
  }, []);

  if (!data) {
    return (
      <p className="text-center py-10 text-pink-600 font-medium">
        Loading cataract service details...
      </p>
    );
  }

  const { title, summary, categories } = data;

  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{summary}</p>
        </header>

        {/* Cataract Cards */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {categories.map((cat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex-1 bg-white rounded-xl shadow-lg p-6 space-y-4 hover:shadow-xl transition"
            >
              <img
                src={`${import.meta.env.BASE_URL}${cat.image}`}
                alt={cat.type}
                className="rounded-lg max-w-xs w-full h-[220px] mx-auto object-cover shadow-md"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-pink-600">{cat.type}</h3>
              <p className="text-gray-700">{cat.description}</p>
              <Link
                to={cat.exploreto}
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm px-6 py-2 rounded-full shadow-md"
              >
                Explore More →
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center">
          <Link
            to="/services"
            className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full inline-block shadow-md"
          >
            Back to Services
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default CataractServices;
