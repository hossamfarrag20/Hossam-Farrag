"use client";

import React from "react";
import { motion } from "framer-motion";
const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-4 left-2 z-50">
      <motion.a
        href="https://wa.me/+201279995846"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <div className="relative">
          {/* دائرة متوهجة ورا الزرار */}
          <motion.span
            className="absolute inset-0 rounded-full bg-green-500 opacity-60 blur-xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* الأيقونة نفسها */}
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-14 h-14 rounded-full shadow-lg"
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </motion.a>
    </div>
  );
};

export default WhatsAppIcon;
