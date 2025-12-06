export default function Timeline() {
  const events = [
    {
      week: "Minggu 1",
      title: "Observasi & Adaptasi",
      desc: "Melakukan survei aset (ABCD) ke dusun-dusun. Sempat nyasar ke sawah warga, tapi jadi tahu jalan tikus.",
      date: "23 - 30 Des 2025"
    },
    {
      week: "Minggu 2",
      title: "Sosialisasi Stunting",
      desc: "Program kerja utama bersama Ibu-ibu PKK. Tim konsumsi kewalahan bikin snack, tapi acara sukses besar.",
      date: "1 - 7 Jan 2026"
    },
    {
      week: "Minggu 3",
      title: "Pelatihan Digital",
      desc: "Mengajar perangkat desa pakai Excel. Ada drama laptop mati lampu pas presentasi.",
      date: "8 - 14 Jan 2026"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Jejak Langkah Kami</h2>
        
        <div className="relative border-l-2 border-green-300 ml-4 md:ml-1/2 space-y-12">
          {events.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Dot Indikator */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
              
              <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12" /> {/* Spacer */}
                
                <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wide">{item.week}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{item.date}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}