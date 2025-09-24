"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollButtonRef.current) {
      gsap.to(scrollButtonRef.current, {
        opacity: showScrollTop ? 1 : 0,
        scale: showScrollTop ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/hossamfarrag20",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hosamfarrag/",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hossamfarrag040@gmail.com",
      color: "hover:text-emerald-400",
    },
  ];

  return (
    <>
      <footer ref={footerRef} className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-slate-800"></div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  Hossam Farrag
                </span>
              </h3>
              <p className="text-slate-400 text-sm">
                Frontend & Fullstack Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`group p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-400 ${link.color} transition-all duration-300 transform hover:scale-110 hover:bg-white/10`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm flex items-center justify-center md:justify-end gap-1">
                Made with{" "}
                <Heart className="w-4 h-4 text-red-400 animate-pulse" /> by
                Hossam
              </p>
              <p className="text-slate-500 text-xs mt-1">
                © 2024 All rights reserved
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                Built with Next.js, TypeScript, Tailwind CSS & GSAP
              </div>
              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <span>hossamfarrag040@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500"></div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        ref={scrollButtonRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 z-50 opacity-0 scale-0"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default Footer;
