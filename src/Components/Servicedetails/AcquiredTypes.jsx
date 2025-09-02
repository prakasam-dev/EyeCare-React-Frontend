import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AcquiredTypes = () => {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    fetch('/data/cataract-service-details.json')
      .then(res => res.json())
      .then(json => {
        const acquired = json.categories.find(cat => cat.type === "Acquired Cataracts");
        setConditions(acquired.conditions);
      })
      .catch(err => console.error('Error fetching acquired cataracts:', err));
  }, []);

  return (
    <section  className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-600 mb-2">Acquired Cataract Types</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about the different types of cataracts that develop later in life due to age, trauma, or systemic conditions.
          </p>
        </header>

        {/* Condition Cards */}
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

        {/* Footer */}
        <footer className="mt-16 text-center">
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

export default AcquiredTypes;
