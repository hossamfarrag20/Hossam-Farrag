export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
  filename: string;
}

/**
 * Parse certificate filename to extract metadata
 * Supports patterns:
 * - YYYY-MM - ISSUER - TITLE.ext
 * - ISSUER - TITLE - YYYY.ext
 *
 * If parsing fails, returns default values
 */
export function parseCertificateFilename(
  filename: string
): Omit<Certificate, "id" | "url"> {
  const basename = filename.replace(/\.[^/.]+$/, ""); // Remove extension
  const cleanName = basename.replace(/[_-]/g, " ").trim(); // Replace underscores/dashes with spaces

  // Pattern 1: YYYY-MM - ISSUER - TITLE.ext
  const pattern1 = /^(\d{4})-(\d{2})\s*-\s*(.+?)\s*-\s*(.+)$/i;
  const match1 = cleanName.match(pattern1);

  if (match1) {
    const [, year, month, issuer, title] = match1;
    return {
      title: title.trim(),
      issuer: issuer.trim(),
      date: `${year}-${month}`,
      filename,
    };
  }

  // Pattern 2: ISSUER - TITLE - YYYY.ext
  const pattern2 = /^(.+?)\s*-\s*(.+?)\s*-\s*(\d{4})$/i;
  const match2 = cleanName.match(pattern2);

  if (match2) {
    const [, issuer, title, year] = match2;
    return {
      title: title.trim(),
      issuer: issuer.trim(),
      date: year,
      filename,
    };
  }

  // Pattern 3: Try to extract year from anywhere in the filename
  const yearMatch = cleanName.match(/\b(20\d{2})\b/);
  const year = yearMatch ? yearMatch[1] : "Unknown";

  // If we found a year, try to split the remaining parts
  if (yearMatch) {
    const withoutYear = cleanName
      .replace(/\b20\d{2}\b/, "")
      .replace(/\s+/g, " ")
      .trim();
    const parts = withoutYear
      .split(/\s*-\s*/)
      .filter((part) => part.length > 0);

    if (parts.length >= 2) {
      return {
        title: parts[parts.length - 1].trim(),
        issuer: parts[0].trim(),
        date: year,
        filename,
      };
    }
  }

  // Fallback: use basename as title
  return {
    title: basename,
    issuer: "Certificate",
    date: "Unknown",
    filename,
  };
}

/**
 * Load all certificate images from the public/assets/Certifications directory
 * and parse their metadata
 */
export function loadCertificates(): Certificate[] {
  // Sample certificate data with proper metadata
  // In a real implementation, you would use dynamic imports or a build-time solution
  const certificateData = [
    {
      filename: "cer1.png",
      title: "Frontend Development / React",
      issuer: "Route academy",
      date: "2025-02",
    },
    {
      filename: "cer2.png",
      title: "Web Development Fundamentals",
      issuer: "Udacity",
      date: "2022-09",
    },
    {
      filename: "cer3.jpg",
      title: "FreeLance",
      issuer: "Itida",
      date: "2025-07",
    },
    {
      filename: "cer7.png",
      title: "JavaScript ES6+",
      issuer: "Mahara Tech",
      date: "2024-12",
    },
    {
      filename: "cer8.png",
      title: "HTML & CSS",
      issuer: "Mahara Tech",
      date: "2023-03",
    },
    {
      filename: "cer9.png",
      title: "Python",
      issuer: "Mahara Tech",
      date: "2025-8",
    },
    {
      filename: "cer4.jpg",
      title: "Embedded Systems Diploma",
      issuer: "Eng - Ahmed Abd El-Ghafaar",
      date: "2023-07",
    },
    {
      filename: "cer10.jpg",
      title: "FreeLance",
      issuer: "Itida",
      date: "2025-07",
    },
    {
      filename: "cer6.jpg",
      title: "Graphic Design",
      issuer: "Breakin Point",
      date: "2023-09",
    },
  ];

  return certificateData.map((cert, index) => ({
    id: `cert-${index + 1}`,
    url: `/assets/Certifications/${cert.filename}`,
    title: cert.title,
    issuer: cert.issuer,
    date: cert.date,
    filename: cert.filename,
  }));
}

/**
 * Get unique issuers from certificates for filter chips
 */
export function getUniqueIssuers(certificates: Certificate[]): string[] {
  const issuers = certificates.map((cert) => cert.issuer);
  return Array.from(new Set(issuers)).sort();
}

/**
 * Filter certificates by issuer
 */
// export function filterByIssuer(
//   certificates: Certificate[],
//   issuer: string
// ): Certificate[] {
//   if (!issuer || issuer === "All") return certificates;
//   return certificates.filter((cert) => cert.issuer === issuer);
// }

/**
 * Filter certificates by search term (title or issuer)
 */
// export function filterBySearch(
//   certificates: Certificate[],
//   searchTerm: string
// ): Certificate[] {
//   if (!searchTerm.trim()) return certificates;

//   const term = searchTerm.toLowerCase();
//   return certificates.filter(
//     (cert) =>
//       cert.title.toLowerCase().includes(term) ||
//       cert.issuer.toLowerCase().includes(term)
//   );
// }

/**
 * Sort certificates by different criteria
 */
// export function sortCertificates(
//   certificates: Certificate[],
//   sortBy: "newest" | "oldest" | "a-z" | "z-a"
// ): Certificate[] {
//   const sorted = [...certificates];

//   switch (sortBy) {
//     case "newest":
//       return sorted.sort((a, b) => {
//         if (a.date === "Unknown" && b.date === "Unknown") return 0;
//         if (a.date === "Unknown") return 1;
//         if (b.date === "Unknown") return -1;
//         return b.date.localeCompare(a.date);
//       });

//     case "oldest":
//       return sorted.sort((a, b) => {
//         if (a.date === "Unknown" && b.date === "Unknown") return 0;
//         if (a.date === "Unknown") return 1;
//         if (b.date === "Unknown") return -1;
//         return a.date.localeCompare(b.date);
//       });

//     case "a-z":
//       return sorted.sort((a, b) => a.title.localeCompare(b.title));

//     case "z-a":
//       return sorted.sort((a, b) => b.title.localeCompare(a.title));

//     default:
//       return sorted;
//   }
// }
