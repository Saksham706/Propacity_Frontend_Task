import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Legacy from "../../components/Legacy/Legacy";
import Principles from "../../components/Principles/Principles";
import Collection from "../../components/Collection/Collection";
import Sustainability from "../../components/Sustainability/Sustainability";
import Associations from "../../components/Associations/Associations";
import Partners from "../../components/Partners/Partners";
import Contact from "../../components/Contact/Contact";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <main>
        <Hero />
        <Legacy />
        <Principles />
        <Collection />
        <Sustainability />
        <Associations />
        <Partners />
        <Contact />
      </main>
    </div>
  );
}

export default Home;