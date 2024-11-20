import Image from "next/image";
import ParticlesComponent from "../components/particles";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from '../sections/About'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
export default function Home() {
  return (
    <div>
      <ParticlesComponent id="particles" />
      <Navbar />
      <Hero />
      <About />

      <Experience />
      <Projects />
      <Contact />

    </div>
  );
}
