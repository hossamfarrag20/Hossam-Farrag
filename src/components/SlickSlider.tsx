"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "💨" },
  { name: "Django", icon: "🎯" },
  { name: "Node.js", icon: "💚" },
  { name: "SQL", icon: "🗄️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🐬" },
  { name: "Docker", icon: "🐳" },
  { name: "Nginx", icon: "🔧" },
  { name: "Git", icon: "📝" },
  { name: "GitHub", icon: "🐙" },
  { name: "jQuery", icon: "💫" },
  { name: "Sass", icon: "💎" },
];

// 🟢 دالة تحدد العدد المناسب أول ما الصفحة تفتح
const getInitialSlides = () => {
  if (typeof window !== "undefined") {
    const w = window.innerWidth;
    if (w < 480) return 3;
    if (w < 768) return 4;
    if (w < 1024) return 6;
    if (w < 1280) return 8;
  }
  return 10;
};

function SlickSlider() {
  const [initialSlides, setInitialSlides] = useState(10);

  useEffect(() => {
    setInitialSlides(getInitialSlides());
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: initialSlides, // 👈 يبدأ بالعدد المناسب للشاشة
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 8, speed: 2500 } },
      { breakpoint: 1024, settings: { slidesToShow: 6, speed: 2500 } },
      { breakpoint: 768, settings: { slidesToShow: 4, speed: 3000 } },
      { breakpoint: 480, settings: { slidesToShow: 3, speed: 3500 } },
    ],
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>
      </div>

      <div className="slider-container h-40">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-4 py-5">
              <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                <div className="text-4xl">{skill.icon}</div>
                <span className="text-white font-medium text-sm whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SlickSlider;
