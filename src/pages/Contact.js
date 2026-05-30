import { useState } from "react";

function Contact() {
  const [state, setState] = useState({ fname: "", email: "", message: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("message sent successfully!");
  };

  return (
    <section id="contact" className="section" style={{ paddingTop: "120px" }}>
      <h2>Contact us</h2>

      <form className="form-box" onSubmit={handleSubmit}>
        <input 
          name="fname"
          type="text" 
          placeholder="name"
          value={state.fname}
          onChange={handleChange}
        />
        
        <input 
          name="email"
          type="email" 
          placeholder="email"
          value={state.email}
          onChange={handleChange}
        />
        
        <textarea 
          name="message"
          placeholder="message"
          value={state.message}
          onChange={handleChange}
        />
        
        <button type="submit">send</button>
      </form>
    </section>
  );
}

export default Contact;