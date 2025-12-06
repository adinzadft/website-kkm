export default function Gallery() {
  // Data dummy foto (Nanti ganti URL-nya dengan foto asli kalian)
  const photos = [
    { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80", height: "h-64" },
    { src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=500&q=80", height: "h-96" },
    { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&q=80", height: "h-64" },
    { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&q=80", height: "h-80" },
    { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80", height: "h-64" },
    { src: "https://images.unsplash.com/photo-1501854140884-074cf27f738d?w=500&q=80", height: "h-96" },
  ];

  return (
    <section className="py-20 bg-gray-50" id="galeri">
      <div className="container mx-auto px-6 text-center">
        
        {/* --- JUDUL --- */}
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Galeri Kenangan</h2>
        <p className="text-gray-500 mb-12">Rekam jejak visual perjalanan kami di Desa [Nama Desa]</p>

        {/* --- BAGIAN 1: VIDEO YOUTUBE (Wajib di Pedoman) --- */}
        <div className="w-full max-w-4xl mx-auto mb-16 aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative group">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_DISINI" // GANTI ID VIDEO DI SINI NANTI
            title="Video KKM Dokumenter"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          
          {/* Overlay Text (Hanya muncul kalau video belum di-play/sebagai hiasan saat hover area luar) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 group-hover:bg-transparent transition-all">
            {/* Bisa dikosongkan jika mengganggu */}
          </div>
        </div>

        {/* --- BAGIAN 2: MASONRY GRID FOTO --- */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4 text-left">
          {photos.map((foto, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden break-inside-avoid shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={foto.src} 
                alt={`Kenangan ${idx}`}
                className="w-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}