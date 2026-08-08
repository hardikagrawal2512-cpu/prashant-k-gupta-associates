import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import WhyChoose from "./components/WhyChoose";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import HeroBanner from "./components/HeroBanner";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner/>
      <Hero />
      <Counter />
      <Services />
      <About />
      <Team />
      <WhyChoose />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />

    </>
  );
}