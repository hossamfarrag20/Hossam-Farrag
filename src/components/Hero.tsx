"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Download } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadCV = () => {
    // Convert Google Drive sharing link to direct download link
    const fileId = "1gy1DIvV79uy8FYvHPvv7qZrsWfOPTDLS";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a temporary link element and trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Hossam_Farrag_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([profileRef.current, contentRef.current], { opacity: 0, y: 50 });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(profileRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }).to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Floating animation for profile
      gsap.to(profileRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-emerald-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Glassy blur background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div ref={profileRef} className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/10 shadow-2xl">
                {/* Placeholder for profile photo */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-emerald-400 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">HF</div>
                </div>
                {/* When you have the actual photo, replace the div above with: */}
                <Image
                  src="/assets/1734089557422.jpg"
                  alt="Hossam Farrag"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="text-center lg:text-left">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                    Hossam
                  </span>
                  <br />
                  <span className="text-white">Farrag</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-slate-300 font-light mb-6">
                  Frontend & Fullstack Developer
                </h2>
              </div>

              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Skilled in React, Next.js, Tailwind, Django. I build responsive,
                SEO-optimized, fullstack websites that deliver exceptional user
                experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:hossamfarrag040@gmail.com"
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Get In Touch
                </a>

                <button
                  onClick={handleDownloadCV}
                  className="group flex items-center gap-3 px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-2xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  Download CV
                </button>
              </div>

              <div className="flex items-center gap-4 text-slate-400 justify-center lg:justify-start">
                <Mail className="w-5 h-5" />
                <span>hossamfarrag040@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
