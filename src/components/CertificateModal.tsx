"use client";

import { useEffect, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
} from "lucide-react";
import Image from "next/image";
import { Certificate } from "@/utils/certificateParser";
import { cn } from "@/utils/cn";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate | null;
  certificates: Certificate[];
  onNavigate: (direction: "prev" | "next") => void;
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificate,
  certificates,
  onNavigate,
}: CertificateModalProps) {
  // Keyboard navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          event.preventDefault();
          onNavigate("prev");
          break;
        case "ArrowRight":
          event.preventDefault();
          onNavigate("next");
          break;
      }
    },
    [isOpen, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!certificate) return null;

  const currentIndex = certificates.findIndex(
    (cert) => cert.id === certificate.id
  );
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < certificates.length - 1;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = certificate.url;
    link.download = certificate.filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenOriginal = () => {
    window.open(certificate.url, "_blank");
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in-0 duration-300" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 duration-300">
          <div className="relative bg-white/10 backdrop-blur-md border mx-5 lg:mx-0 border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 gap-3 border-b  border-white/10">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white overflow-hidden">
                  {certificate.title}
                </h2>
                <p className="text-slate-400 text-sm">
                  {certificate.issuer} • {certificate.date}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 mx-2 md:mx-4 whitespace-nowrap">
                <button
                  onClick={() => onNavigate("prev")}
                  disabled={!hasPrev}
                  className={cn(
                    "md:p-2 rounded-lg transition-all duration-200",
                    hasPrev
                      ? "text-white hover:bg-white/10 hover:scale-110"
                      : "text-slate-600 cursor-not-allowed"
                  )}
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                <span className="text-slate-400 text-xs md:text-base md:px-2">
                  {currentIndex + 1} / {certificates.length}
                </span>

                <button
                  onClick={() => onNavigate("next")}
                  disabled={!hasNext}
                  className={cn(
                    "md:p-2 rounded-lg transition-all duration-200",
                    hasNext
                      ? "text-white hover:bg-white/10 hover:scale-110"
                      : "text-slate-600 cursor-not-allowed"
                  )}
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              {/* Close Button */}
              <Dialog.Close asChild>
                <button
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>

            {/* Image Container */}
            <div className="relative bg-white/5 p-4">
              <div className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                  src={certificate.url}
                  alt={`${certificate.title} – ${certificate.issuer} certificate`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="text-sm md:text-base flex items-center justify-between p-4 border-t border-white/10">
              <div className="text-slate-400 text-sm">
                Use ← → arrow keys to navigate
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenOriginal}
                  className="text-sm md:text-base whitespace-nowrap flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Original
                </button>

                <button
                  onClick={handleDownload}
                  className="text-sm md:text-base flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
