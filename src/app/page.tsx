"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import SlickSlider from "@/components/SlickSlider";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import ContentCreator from "@/components/ContentCreator";
import DesignGallery from "@/components/DesignGallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Loader from "@/components/Loader";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // تخلي اللودينج يظهر لمدة ثانيتين
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      // <div className="flex items-center justify-center min-h-screen bg-black text-white text-2xl">
      //   {/* ممكن تستبدلها بـ spinner أو animation */}
      //   <p className="animate-pulse">Loading...</p>
      // </div>
      <Loader />
    );
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <SlickSlider />
      <Projects />
      <Certificates />
      <ContentCreator />
      <DesignGallery />
      <ContactForm />
      <WhatsAppIcon />
      <Footer />
    </main>
  );
}
