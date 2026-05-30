import React from 'react';
import '../style.css'; 

function About() {
  return (
    <section id="about" className="section light">
      <div className="container" id="about-container">
        <h2>About Us</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              With our professional team and modern facilities, we are committed to providing
              health care services to our people.
              We offer a wide range of medical services, from routine checkups to emergency care,
              all designed to meet the needs of our patients.
            </p>

            <h3>
              Your health is our priority.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;