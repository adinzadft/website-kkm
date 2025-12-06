import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white bg-gradient-to-b from-black/50 to-transparent">
      <div className="font-bold text-xl tracking-tighter">
        KKM <span className="text-green-400">2026</span>
      </div>
      <button className="p-2 hover:bg-white/10 rounded-full transition">
        <Menu size={24} />
      </button>
    </nav>
  );
}