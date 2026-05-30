import React from 'react';
import '../style.css'; // Adjust path based on your folder structure

function Facility() {
  // Storing your data in an array makes it easy to add more facilities later!
  const facilityList = [
    { id: 1, title: "Emergency", description: "Available all day for urgent cases." },
    { id: 2, title: "Doctors", description: "Qualified and experienced staff." },
    { id: 3, title: "Equipment", description: "Modern tools for diagnosis." }
  ];

  return (
    <section id="facility" className="section">
      <h2>Facilities</h2>

      <div className="container grid">
        {facilityList.map((facility) => (
          <div className="box" key={facility.id}>
            <h4>{facility.title}</h4>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Facility;