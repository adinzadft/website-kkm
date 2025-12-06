"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-black/50">
        {/* Nanti ganti <img> ini dengan <video> loop drone desa */}
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop" 
          alt="Desa View" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-light mb-2 tracking-widest">
            MENGABDI DI DESA JEDONG
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            KKM UIN MALANG 2026
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 mb-8">
            Kelompok 56 • NARAKAJAYA
          </p>

          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-medium transition-all">
              Jelajahi Desa
            </button>
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-full font-medium transition-all">
              Galeri Kenangan
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 text-white"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}