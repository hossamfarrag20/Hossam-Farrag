"use client";

import React from "react";
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

function SlickSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000, // سرعة الحركة
    slidesToShow: 10, // عدد العناصر الظاهرة
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // يخليها تتحرك من غير توقف
    cssEase: "linear", // حركة سلسة مستمرة
    pauseOnHover: false, // ما يوقفش لو عملت hover
    responsive: [
      {
        breakpoint: 1280, // أقل من 1280px (شاشات لابتوب عادية)
        settings: {
          slidesToShow: 8,
          speed: 2500, // ممكن تزود السرعة عشان عدد أقل
        },
      },
      {
        breakpoint: 1024, // أقل من 1024px (تابلت كبير)
        settings: {
          slidesToShow: 6,
          speed: 2500,
        },
      },
      {
        breakpoint: 768, // أقل من 768px (تابلت صغير / موبايل كبير)
        settings: {
          slidesToShow: 4,
          speed: 3000, // تزود وقت الحركة عشان يبقى أوضح
        },
      },
      {
        breakpoint: 480, // أقل من 480px (موبايلات صغيرة)
        settings: {
          slidesToShow: 3,
          speed: 3500,
        },
      },
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
        <div className="">
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
      </div>
    </section>
  );
}

export default SlickSlider;
