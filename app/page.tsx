import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="min-h-screen">      
      <Hero />
      <About />
      <Products />
      {/* <IndustriesShowcase />
      <Testimonials /> */}
      <Contact />      
    </main>
  );
}
