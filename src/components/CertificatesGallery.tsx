"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, ExternalLink, Calendar, Award } from "lucide-react";
import Image from "next/image";
import { Certificate, loadCertificates } from "@/utils/certificateParser";
import CertificateModal from "./CertificateModal";

gsap.registerPlugin(ScrollTrigger);

export default function CertificatesGallery() {
  const [filteredCertificates, setFilteredCertificates] = useState<
    Certificate[]
  >([]);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const filtersRef = useRef<HTMLDivElement>(null);

  // Load certificates on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadedCertificates = loadCertificates();
      setFilteredCertificates(loadedCertificates);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle window resize to track screen size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (filtersRef.current) {
        gsap.fromTo(
          filtersRef.current,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: filtersRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredCertificates]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const handleViewCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleModalNavigate = (direction: "prev" | "next") => {
    if (!selectedCertificate) return;

    const currentIndex = filteredCertificates.findIndex(
      (cert) => cert.id === selectedCertificate.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredCertificates.length - 1;
    } else {
      newIndex =
        currentIndex < filteredCertificates.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedCertificate(filteredCertificates[newIndex]);
  };

  // Calculate how many certificates to show
  const getVisibleCount = () => {
    if (showAll) return filteredCertificates.length;
    return windowWidth >= 1200 ? 6 : 4;
  };

  const visibleCertificates = filteredCertificates.slice(0, getVisibleCount());
  const hasMoreCertificates = filteredCertificates.length > getVisibleCount();

  return (
    <div ref={sectionRef} className="py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Certificates Gallery
          </span>
        </h3>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Explore my professional certifications and achievements
        </p>
      </div>

      {/* Certificates Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {isLoading && (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="group relative">
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-white/10 overflow-hidden">
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-white/5 animate-pulse">
                    <div className="w-full h-full bg-gradient-to-r from-slate-700 to-slate-600"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-5 bg-slate-600 rounded animate-pulse"></div>
                    <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-slate-700 rounded w-1/2 animate-pulse"></div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="h-8 bg-slate-600 rounded w-16 animate-pulse"></div>
                    <div className="h-8 bg-slate-600 rounded w-16 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {!isLoading &&
          visibleCertificates.map((certificate) => (
            <div
              key={certificate.id}
              ref={addToRefs}
              className="group relative"
            >
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-white/10 hover:border-white/20 overflow-hidden">
                <div className="relative h-64 mb-4 rounded-xl overflow-hidden bg-white/5">
                  <Image
                    src={certificate.url}
                    alt={`${certificate.title} – ${certificate.issuer} certificate`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleViewCertificate(certificate)}
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white line-clamp-2 group-hover:text-emerald-400 transition-colors duration-200">
                    {certificate.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{certificate.issuer}</p>
                  {certificate.date !== "Unknown" && (
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{certificate.date}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleViewCertificate(certificate)}
                    className="flex items-center gap-2 px-3 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition-all duration-200 text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={certificate.filename}
                    className="flex items-center gap-2 px-3 py-2 bg-white/10 text-slate-300 rounded-lg hover:bg-white/20 transition-all duration-200 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open
                  </a>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                    <Award className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Show More Button */}
      {!isLoading && hasMoreCertificates && !showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Award className="w-5 h-5" />
            Show More Certificates
            <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
              +{filteredCertificates.length - getVisibleCount()}
            </span>
          </button>
        </div>
      )}

      {/* Show Less Button */}
      {!isLoading &&
        showAll &&
        filteredCertificates.length > (windowWidth >= 1200 ? 6 : 4) && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-600/50 text-slate-300 rounded-lg hover:bg-slate-600/70 transition-all duration-300"
            >
              Show Less
            </button>
          </div>
        )}

      {/* No Results */}
      {!isLoading && filteredCertificates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 text-lg mb-2">
            No certificates found
          </div>
          <div className="text-slate-500 text-sm">
            Try adjusting your search or filter criteria
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificate={selectedCertificate}
        certificates={filteredCertificates}
        onNavigate={handleModalNavigate}
      />
    </div>
  );
}
