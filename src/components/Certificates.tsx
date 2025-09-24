"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Calendar } from "lucide-react";
import CertificatesGallery from "./CertificatesGallery";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    id: 1,
    title: "Udacity – Web Development",
    issuer: "Udacity",
    date: "2023",
    description:
      "Comprehensive web development program covering modern frameworks and best practices.",
    icon: "🎓",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Python & Django Course",
    issuer: "Professional Training",
    date: "2023",
    description:
      "Advanced Python programming and Django framework for web development.",
    icon: "🐍",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Embedded Systems Diploma",
    issuer: "Technical Institute",
    date: "2022",
    description: "Hardware programming and embedded systems development.",
    icon: "⚡",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Route Academy – Frontend Development",
    issuer: "Route Academy",
    date: "2023",
    description:
      "Modern frontend development with React, JavaScript, and responsive design.",
    icon: "⚛️",
    color: "from-purple-500 to-pink-600",
  },
];

const Certificates = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate certificate cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              scale: 0.8,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.2,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certificates & Education
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge
            technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 origin-top"
            style={{ height: "100%" }}
          ></div>

          {/* Certificate Cards */}
          <div className="space-y-12">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                ref={addToRefs}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-purple-500 z-10 shadow-lg"></div>

                {/* Certificate Card */}
                <div
                  className={`w-full max-w-md ${
                    index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
                  }`}
                >
                  <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                    {/* Icon and Gradient */}
                    <div
                      className={`absolute -top-4 ${
                        index % 2 === 0 ? "left-6" : "right-6"
                      } w-12 h-12 bg-gradient-to-r ${
                        cert.color
                      } rounded-full flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {cert.icon}
                    </div>

                    <div className="pt-6">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <p className="text-purple-400 font-medium mb-3">
                        {cert.issuer}
                      </p>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>

                      {/* Badge */}
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">
                          Certified
                        </span>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">9+</div>
            <div className="text-slate-400 text-sm">Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-slate-400 text-sm">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-slate-400 text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400 text-sm">Commitment</div>
          </div>
        </div>

        {/* Certificates Gallery */}
        <CertificatesGallery />
      </div>
    </section>
  );
};

export default Certificates;
