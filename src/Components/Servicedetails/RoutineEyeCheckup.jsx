import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RoutineEyeCheckup = () => {
  const [checkupData, setCheckupData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/routine-eye-checkup-tests.json`)
      .then((response) => response.json())
      .then((data) => setCheckupData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
    console.log(
      "Fetching from:",
      `${import.meta.env.BASE_URL}data/routine-eye-checkup-tests.json`
    );
  }, []);

  if (!checkupData) {
    return (
      <p className="text-center py-10 text-pink-600 font-medium">
        Loading routine eye checkup details...
      </p>
    );
  }

  const { checkupTitle, checkupPurpose, tests } = checkupData;

  return (
    <section
      id="routine-eye-checkup"
      className="py-20 bg-gradient-to-br from-pink-100 to-purple-100"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {checkupTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {checkupPurpose}
          </p>
        </header>

        {/* Test Cards */}
        <ul className="space-y-24">
          {tests.map((test, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row gap-10 items-start"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Left Side */}
              <div className="w-full lg:w-1/2 px-8 space-y-8">
                <img
                  src={test.image}
                  alt={test.testName}
                  className="rounded-xl shadow-lg w-full max-w-[300px] items-center md:max-w-[400px] mx-auto h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right Side */}
              <div className="lg:w-1/2 w-full space-y-3">
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-pink-600 text-center">
                  {test.testName}
                </h3>

                <p className="text-2xl sm:text-lg text-gray-700 text-center px-4">
                  {test.description}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>Why it’s done:</strong> {test.whyItIsDone}
                </p>
                {test.investigation && (
                  <p className="text-gray-700 text-lg">
                    <strong>Investigation:</strong> {test.investigation}
                  </p>
                )}
                {test.procedure && (
                  <p className="text-gray-700 text-lg ">
                    <strong>Procedure:</strong> {test.procedure}
                  </p>
                )}
                <div className="pt-4 flex justify-center text-lg">
                  <span
                    className={`px-4 py-2 text-sm font-semibold rounded-full
                    ${
                      test.importanceLevel === "High"
                        ? "bg-red-100 text-red-700"
                        : test.importanceLevel === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    Importance: {test.importanceLevel}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer CTA */}
        <footer className="mt-24 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Want to experience all these?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#appointment"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full shadow-md"
            >
              Schedule your visit
            </a>
            <Link
              to="/services"
              className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full shadow-md"
            >
              Back to Services
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default RoutineEyeCheckup;
