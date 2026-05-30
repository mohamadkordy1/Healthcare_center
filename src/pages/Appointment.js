import { useState } from "react";
import '../style.css';
import '../appointment-style.css';
import '../index.css';

function Appointment() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    time: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <>
  
      {/* MAIN FORM SECTION */}
      <main className="appointment-container">
        <section className="appointment-card">
          <div className="form-header">
            <h1>Book Your Visit</h1>
            <p>Your health is our priority. Schedule your visit today.</p>
          </div>

          <form className="form-box" onSubmit={handleSubmit}>
            <input 
              name="fullName" 
              type="text" 
              placeholder="Full Name" 
              value={form.fullName} 
              onChange={handleChange} 
            />
            <input 
              name="email" 
              type="email" 
              placeholder="Email Address" 
              value={form.email} 
              onChange={handleChange} 
            />
            <input 
              name="phone" 
              type="tel" 
              placeholder="Phone Number" 
              value={form.phone} 
              onChange={handleChange} 
            />
            
            <select name="department" value={form.department} onChange={handleChange}>
              <option value="" disabled>Select Department</option>
              <option value="general">General Medicine</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="cardiology">Cardiology</option>
            </select>

            <div className="responsive-row">
              <input 
                name="date" 
                type="date" 
                value={form.date} 
                onChange={handleChange} 
              />
              
              <select name="time" value={form.time} onChange={handleChange}>
                <option value="" disabled>Select Time</option>
                <option value="09:00">09:00 AM (Full)</option>
                <option value="09:30">09:30 AM (Full)</option>
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="11:30">11:30 AM</option>
              </select>
            </div>

            <textarea 
              name="message" 
              placeholder="How can we help you?" 
              value={form.message} 
              onChange={handleChange} 
            />
            
            <button type="submit">Confirm Appointment</button>
          </form>
        </section>
      </main>

      
  
    </>
  );
}

export default Appointment;