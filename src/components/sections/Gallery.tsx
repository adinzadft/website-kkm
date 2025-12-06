export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Galeri Kenangan</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              Foto {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}