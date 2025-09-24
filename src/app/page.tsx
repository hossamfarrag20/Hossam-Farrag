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
export default function Home() {
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
