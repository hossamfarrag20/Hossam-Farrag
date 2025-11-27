"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "React & Tailwind – Product listings, cart, filters. A modern e-commerce platform with responsive design and smooth user experience.",
    image: "/assets/pro1.png",
    demo: "https://hossamfarrag20.github.io/ecommerce/",
    repo: null,
    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    title: "IRIS – AI Diabetic Eye Detection",
    description:
      "Django & AI – Health data, detection, appointments. An AI-powered system for early detection of diabetic eye diseases.",
    image: "/assets/pro2.png",
    demo: null,
    repo: "https://github.com/hossamfarrag20/IRIS-AI-Powered-Diabetic-Eye-Disease-Detection",
    tech: ["Django", "Python", "AI/ML", "Healthcare"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Yassmin Magdy Portfolio",
    description:
      "Yassmin Magdy Portfolio - An online portfolio showcasing Yassmin’s artwork, style, and contact info in a clean, modern layout.",
    image: "/assets/pro3.png",
    demo: "https://yassmin-magdy.vercel.app/",
    repo: null,
    tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    title: "Mo3lmy (معلمي)",
    description:
      "Mo3lmy (معلمي) - An Arabic educational platform that connects students with qualified teachers across the Arab world, offering free course listings, easy registration, and high‑quality learning opportunities",
    image: "/assets/pro4.png",
    demo: "https://www.mo3lmy.com/",
    repo: null,
    tech: [
      "Django",
      "Python",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "SEO",
      "PostgreSQL",
      "Nginx",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    title: "Modern Store (simulation)",
    description:
      "Modern Store (simulation) - A front‑end demo of a modern e-commerce site hosted on Vercel, using a simulated (mock/fake) REST API to fetch product data. Designed purely for prototyping and presentation purposes, no real backend integration.",
    image: "/assets/pro5.png",
    demo: "https://modern-store-ruddy.vercel.app/",
    repo: "https://github.com/hossamfarrag20/ModernStore",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Responsive Design",
      "Gsap",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 6,
    title: "DevFolio",
    description:
      "DevFolio - A personal portfolio website built with Bootstrap, showcasing projects, skills, and contact information in a clean, responsive layout.",
    image: "/assets/pro6.png",
    demo: "https://hossamfarrag20.github.io/DevFolio-Hossam-Farrag/",
    repo: "https://github.com/hossamfarrag20/DevFolio-Hossam-Farrag",
    tech: ["bootstrap", "jQuery", "HTML", "CSS", "JavaScript"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 7,
    title: "Mealify",
    description: `Mealify is a static, responsive landing page built entirely with HTML and CSS.
It demonstrates clean layout structuring, responsive design techniques, and visual presentation using JavaScript in dark mode.
The project highlights semantic HTML and organized CSS for creating an elegant, user-friendly interface.`,
    image: "/assets/pro7.png",
    demo: "https://hossamfarrag20.github.io/New-Mealify/",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 8,
    title: "Grid",
    description: `This project is a static website built with HTML and CSS, specifically showcasing the power of CSS Grid for layout design.
                  It demonstrates how grid can organize content into a clean, responsive structure with consistent spacing and alignment, without relying on external frameworks or JavaScript.`,
    image: "/assets/pro8.png",
    demo: "https://hossamfarrag20.github.io/Grid/",
    repo: "https://github.com/hossamfarrag20/Grid",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 9,
    title: "Recipe",
    description: `This project is built with HTML for structure and Sass (SCSS) for styling, showcasing advanced CSS features like variables, mixins, and nesting.
                  Sass is compiled into optimized CSS to enhance maintainability and scalability of the design.
                  The project demonstrates clean, modular styling without relying on JavaScript or external frameworks.`,
    image: "/assets/pro9.png",
    demo: "https://hossamfarrag20.github.io/SassProject/",
    repo: "https://github.com/hossamfarrag20/SassProject",
    tech: ["HTML", "JavaScript", "Responsive Design", "Sass", "React"],
    gradient: "from-emerald-500 to-teal-600",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [showAll, setShowAll] = useState(false);

  // Function to get the number of projects to show based on screen size
  const getProjectsToShow = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1200 ? 6 : 4;
    }
    return 6; // Default for SSR
  };

  const [projectsToShow, setProjectsToShow] = useState(getProjectsToShow);

  // Update projects to show on window resize
  useEffect(() => {
    const handleResize = () => {
      setProjectsToShow(getProjectsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get the projects to display
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, projectsToShow);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-emerald-900"></div>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my latest work in web development and AI applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              ref={addToRefs}
              className="group relative h-full"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm border flex flex-col  border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {/* Placeholder for project image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Action buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-auto">
                    {" "}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Links */}
                    <div className="flex gap-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            Source Code
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.length > projectsToShow && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full hover:from-indigo-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Show More Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="group relative px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-full hover:from-slate-500 hover:to-slate-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Show Less</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
