import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Timeline from "@/components/sections/Timeline";
import Proker from "@/components/sections/Proker";
import Gallery from "@/components/sections/Gallery";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans relative">
      {/* 1. Navbar: Komponen Navigasi (Position Absolute di dalam komponennya) */}
      <Navbar />

      {/* 2. Hero Section: Tampilan awal full screen */}
      <Hero />

      {/* 3. Profile Section: Data Desa & Peta (Metode ABCD) */}
      <Profile />

      {/* 4. Timeline Section: Log Sheet Harian */}
      <Timeline />

      {/* 5. Proker Section: Program Kerja Unggulan (Sertifikat Karya) */}
      <Proker />

      {/* 6. Gallery Section: Foto & Video Kenangan */}
      <Gallery />

      {/* 7. Team Section: Anggota Kelompok */}
      <Team />

      {/* 8. Footer: Copyright & Credit */}
      <Footer />
    </main>
  );
}