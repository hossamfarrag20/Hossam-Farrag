"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Layers, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const designTools = [
  {
    id: 1,
    name: "Photoshop",
    icon: "🎨",
    description: "Photo editing and digital art",
    color: "from-blue-500 to-cyan-500",
    proficiency: 90,
  },
  {
    id: 2,
    name: "Multisim, Proteus",
    icon: "✨",
    description: "Create Circuits and Simulations",
    color: "from-orange-500 to-yellow-500",
    proficiency: 85,
  },
  {
    id: 3,
    name: "COMSOL",
    icon: "⚡",
    description: "Engineering simulation",
    color: "from-green-500 to-emerald-500",
    proficiency: 80,
  },
  {
    id: 4,
    name: "MATLAB",
    icon: "📊",
    description: "Data analysis and modeling",
    color: "from-purple-500 to-pink-500",
    proficiency: 75,
  },
];

const DesignGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const thumbnailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate design tool cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              rotation: -10,
            },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1,
            }
          );
        }
      });

      // Random floating animation for thumbnails
      thumbnailsRef.current.forEach((thumbnail, index) => {
        if (thumbnail) {
          gsap.to(thumbnail, {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            rotation: "random(-5, 5)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.5,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const addToThumbnailsRefs = (el: HTMLDivElement | null) => {
    if (el && !thumbnailsRef.current.includes(el)) {
      thumbnailsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>

      {/* Floating Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={addToThumbnailsRefs}
            className={`absolute w-16 h-16 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-2xl">
              {["🎨", "✨", "⚡", "📊", "🎯", "💎", "🔥", "⭐"][i]}
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Design Skills
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Creative tools and software for design, simulation, and data
            visualization
          </p>
        </div>

        {/* Design Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {designTools.map((tool) => (
            <div key={tool.id} ref={addToCardsRefs} className="group relative">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                {/* Tool Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {tool.icon}
                </div>

                {/* Tool Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {tool.name}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                  {tool.description}
                </p>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-white font-medium">
                      {tool.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 bg-gradient-to-r ${tool.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${tool.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Design Philosophy */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Creative Design
                </h3>
                <p className="text-slate-400 text-sm">
                  Combining aesthetics with functionality to create visually
                  appealing solutions
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Technical Precision
                </h3>
                <p className="text-slate-400 text-sm">
                  Using advanced tools for engineering simulations and data
                  analysis
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Innovation</h3>
                <p className="text-slate-400 text-sm">
                  Pushing boundaries with cutting-edge design and simulation
                  techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
