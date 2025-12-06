import { Instagram, Linkedin, Github } from "lucide-react";

export default function Team() {
  // Ganti data ini dengan nama teman sekelompokmu nanti
  const members = [
    {
      name: "Nama Kamu",
      role: "Ketua & IT Specialist",
      jurusan: "Teknik Informatika",
      ig: "https://instagram.com/username",
      foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80"
    },
    {
      name: "Siti Aminah",
      role: "Sekretaris & Bendahara",
      jurusan: "Akuntansi",
      ig: "#",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      name: "Budi Santoso",
      role: "Humas & Logistik",
      jurusan: "Hukum",
      ig: "#",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    // Tambahkan anggota lain sampai 7-10 orang...
  ];

  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Tim KKM [Nomor]</h2>
        <p className="text-gray-500 mb-12">Orang-orang hebat dibalik pengabdian ini</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <div key={idx} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Foto Anggota */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.foto} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay Info (Naik ke atas saat hover) */}
              <div className="p-6 relative bg-white">
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-green-600 text-sm font-medium mb-1">{member.role}</p>
                <p className="text-xs text-gray-400 mb-4">{member.jurusan}</p>
                
                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
                   <a href={member.ig} target="_blank" rel="noreferrer" className="hover:text-pink-600"><Instagram size={18}/></a>
                   <a href="#" className="hover:text-blue-600"><Linkedin size={18}/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}