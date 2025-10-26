import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import IndustriesShowcase from "@/components/IndustriesShowcase";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      {/* <IndustriesShowcase />
      <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
