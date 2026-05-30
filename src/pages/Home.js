import image3 from "../images/image3.jpeg";

 function Home() {
  return (
    <section id="home" class="hero">
    <div class="container hero-content">

        <div class="text">
            <h1>Stay safe and healthy.</h1>
            <p>Your health and well-being are our priorities.</p>
            <button ><a href="/appointment" class="button">Make Appointment</a></button>
        </div>
        <div class="image">
            <img src={image3} alt="doctor" />
        </div>


        
      </div>
    </section>
  );
}

export default Home;