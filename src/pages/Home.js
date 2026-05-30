import image3 from "../images/image3.jpeg";
import { Link } from "react-router-dom";
 function Home() {
  return (
    <section id="home" class="hero">
    <div class="container hero-content">

        <div class="text">
            <h1>Stay safe and healthy.</h1>
            <p>Your health and well-being are our priorities.</p>
            <button >  <Link to="/Appointment">Make an Appointment</Link></button>
        </div>
        <div class="image">
            <img src={image3} alt="doctor" />
        </div>


        
      </div>
    </section>
  );
}

export default Home;