"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Globe,
  Brain,
  Users,
  Clock,
  Target,
  Lightbulb,
  Heart,
  GraduationCap,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if all refs are available
      if (
        !sectionRef.current ||
        !avatarRef.current ||
        !skillsRef.current ||
        !valuesRef.current
      ) {
        return;
      }

      // Initial setup
      const elements = [
        contentRef.current,
        avatarRef.current,
        skillsRef.current,
        valuesRef.current,
      ].filter(Boolean); // Filter out null elements

      if (elements.length === 0) return;

      gsap.set(elements, {
        opacity: 0,
        y: 50,
      });

      // Create scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Only animate elements that exist
      if (avatarRef.current) {
        tl.to(avatarRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (contentRef.current) {
        tl.to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        );
      }

      if (skillsRef.current) {
        tl.to(
          skillsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      if (valuesRef.current) {
        tl.to(
          valuesRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      // Floating animation for avatar
      if (avatarRef.current) {
        gsap.to(avatarRef.current, {
          y: -5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const technicalSkills = [
    {
      category: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind",
        "Bootstrap",
      ],
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "Node.js", "Express.js", "Firebase"],
      icon: Code2,
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      icon: Database,
      color: "from-purple-500 to-indigo-500",
    },
    {
      category: "DevOps",
      skills: ["Docker", "Nginx"],
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
  ];

  const softSkills = [
    {
      name: "Problem Solving",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Continuous Learning",
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Adaptability",
      icon: Target,
      color: "from-emerald-500 to-cyan-500",
    },
    {
      name: "Time Management",
      icon: Clock,
      color: "from-amber-500 to-orange-500",
    },
    { name: "Teamwork", icon: Users, color: "from-blue-500 to-indigo-500" },
  ];

  const interests = [
    {
      title: "Modern Web Apps",
      description:
        "Building responsive, performant applications with cutting-edge technologies",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI in Healthcare",
      description:
        "IRIS project for diabetic eye disease detection using machine learning",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Educational Content",
      description: "Creating tutorials and content about Frontend development",
      icon: Lightbulb,
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Avatar and Intro */}
          <div ref={avatarRef} className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              {/* Avatar Placeholder */}
              <div className="relative group mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/10 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-emerald-400 flex items-center justify-center">
                    <div className="text-white text-3xl font-bold">HF</div>
                    <Image
                      src="/assets/About.jpg"
                      alt="Hossam Farrag"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  Hossam Farrag
                </span>
              </h3>

              <div className="space-y-4 text-slate-300">
                <p className="text-sm leading-relaxed">
                  <span className="text-emerald-400 font-semibold">
                    Communications & Electronics Engineering
                  </span>{" "}
                  graduate from Mansoura University
                </p>
                <p className="text-sm leading-relaxed">
                  Passionate{" "}
                  <span className="text-indigo-400 font-semibold">
                    Fullstack Developer
                  </span>{" "}
                  dedicated to creating exceptional digital experiences
                </p>
              </div>

              {/* Personal Values */}
              <div
                ref={valuesRef}
                className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  Core Values
                </h4>
                <div className="text-sm text-slate-400 space-y-2 text-left">
                  <p>• Commitment to continuous growth and learning</p>
                  <p>• Delivering high-quality, reliable solutions</p>
                  <p>• Strong focus on problem-solving and innovation</p>
                  <p>• Time management, productivity-driven mindset</p>
                  <p>• Collaboration, adaptability, and professionalism</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div ref={skillsRef} className="lg:col-span-2 space-y-8 mt-5 lg:mt-0">
            {/* Technical Skills Grid */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-indigo-400" />
                <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {technicalSkills.map((skillGroup, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${skillGroup.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <skillGroup.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-lg">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white/10 text-slate-300 text-sm rounded-full border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Soft Skills
                </span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-300 text-sm text-center font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Projects */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Interests & Focus Areas
                </span>
              </h3>

              <div className="space-y-6">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${interest.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <interest.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {interest.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
