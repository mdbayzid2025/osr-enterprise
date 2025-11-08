import About from "@/components/About";
import CertificatesCom from "@/components/CertificatesCom";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="min-h-screen">      
      <Hero />
      <About />
      <Products />
      <CertificatesCom />
      {/* <IndustriesShowcase />
      // <Testimonials /> */}
      <Contact />      
    </main>
  );
}
