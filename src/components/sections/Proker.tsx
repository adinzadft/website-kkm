import { Globe, BookOpen, Video } from "lucide-react";

export default function Proker() {
  const prokers = [
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Digitalisasi Desa",
      desc: "Pembuatan Website Profil Desa & Peta Aset Digital."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Pojok Baca",
      desc: "Revitalisasi perpustakaan mini di balai desa."
    },
    {
      icon: <Video className="w-8 h-8 text-red-600" />,
      title: "Video Dokumenter",
      desc: "Merekam potensi wisata dan budaya lokal."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Program Kerja Unggulan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {prokers.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}