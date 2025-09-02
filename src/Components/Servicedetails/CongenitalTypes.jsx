import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CongenitalTypes = () => {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    fetch('/data/cataract-service-details.json')
      .then(res => res.json())
      .then(json => {
        const congenital = json.categories.find(cat => cat.type === "Congenital Cataracts");
        setConditions(congenital.conditions);
      });
  }, []);

  return (
    <section  className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-600">Congenital Cataract Types</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore the conditions and symptoms associated with congenital cataracts.</p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {conditions.map((type, index) => (
            <div key={index} 
            data-aos='fade-up' data-aos-delay='400'
            className="bg-white rounded-xl shadow-md p-6 space-y-3 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-pink-600">{type.name}</h3>
              <p className="text-gray-700"><strong>Description:</strong> {type.description}</p>
              <p className="text-gray-700"><strong>Symptoms:</strong> {type.symptoms.join(', ')}</p>
              <p className="text-gray-700"><strong>Signs:</strong> {type.signs.join(', ')}</p>
              <p className="text-gray-700"><strong>Risk Factors:</strong> {type.riskFactors.join(', ')}</p>
              <p className="text-gray-700"><strong>Treatment:</strong> {type.treatment}</p>
              <p className="text-gray-700"><strong>Complications (With Surgery):</strong> {type.complications.withSurgery.join(', ')}</p>
              <p className="text-gray-700"><strong>Complications (Without Surgery):</strong> {type.complications.withoutSurgery.join(', ')}</p>
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center">
          <Link
            to="/services"
            className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-2 rounded-full inline-block shadow-md"
          >
             Back to Services
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default CongenitalTypes;
