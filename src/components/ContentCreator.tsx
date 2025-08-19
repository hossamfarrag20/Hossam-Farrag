"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Youtube, Music } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContentCreator = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content from left
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            x: -100,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate video from right
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          {
            opacity: 0,
            x: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: videoRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            delay: 0.3,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background with gradient overlay - متناسق مع باقي المشروع */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-emerald-900"></div>

      {/* Pattern overlay مثل باقي الـ sections */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header - متناسق مع باقي المشروع */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Content Creation
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Sharing knowledge through educational content and tutorials
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div ref={contentRef} className="space-y-8">
            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-indigo-500 bg-clip-text text-transparent">
                Sharing Knowledge &
              </span>
              <br />
              <span className="text-white">Creating Content</span>
            </h3>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
              I regularly share programming tutorials, tips, and project
              breakdowns on YouTube and TikTok to help developers learn faster
              and build better.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* YouTube Button */}
              <a
                href="https://www.youtube.com/@devastor21/shorts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my YouTube channel"
                className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                YouTube Channel
              </a>

              {/* TikTok Button */}
              <a
                href="https://www.tiktok.com/@dev_astor?lang=ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my TikTok profile"
                className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-2xl font-semibold hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <Music className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                TikTok Profile
              </a>
            </div>
          </div>

          {/* Right Column - Video */}

          <div ref={videoRef} className="lg:order-last order-first">
            <div className="relative">
              {/* Video Container */}
              <div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] group cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=oknnlHEyB94",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <div className="aspect-[9/16] max-h-[600px] relative mx-auto">
                  <iframe
                    src="https://www.youtube.com/embed/oknnlHEyB94?enablejsapi=1"
                    title="Featured YouTube Short"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full cursor-pointer" // يمنع النقر على الـ iframe نفسه
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>

              {/* Decorative glow effect */}
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreator;
