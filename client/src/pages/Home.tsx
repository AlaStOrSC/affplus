import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Markets from "@/components/Markets";
import Navbar from "@/components/Navbar";
import Technology from "@/components/Technology";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Markets />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
