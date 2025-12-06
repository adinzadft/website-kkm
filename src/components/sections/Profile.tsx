import { MapPin, Users, Sprout } from "lucide-react";

// WAJIB ADA "export default"
export default function Profile() {
  return (
    <section id="profil" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Teks Formal */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
            Profil Desa & Potensi
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Berdasarkan hasil survei metode ABCD (Asset Based Community Development), 
            Desa [Nama Desa] memiliki potensi luar biasa di bidang pertanian dan UMKM. 
            Kami memetakan aset utama yang menjadi fondasi ekonomi warga.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <Users className="text-green-600 mb-2" />
              <h3 className="font-bold">2.500+</h3>
              <p className="text-sm text-gray-500">Jiwa Penduduk</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <Sprout className="text-green-600 mb-2" />
              <h3 className="font-bold">Pertanian</h3>
              <p className="text-sm text-gray-500">Sektor Utama</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Placeholder Peta Interaktif */}
        <div className="h-80 bg-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden shadow-lg group">
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
             <span className="text-gray-500 font-medium flex flex-col items-center">
               <MapPin className="mb-2" />
               Peta Aset Desa (Google Maps Embed)
             </span>
          </div>
          {/* Overlay saat hover (efek 'IT banget') */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
            Klik untuk Eksplorasi Aset
          </div>
        </div>
      </div>
    </section>
  );
}