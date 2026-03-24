import Icon from "@/components/ui/icon";
import { MatrixSmall } from "@/components/MatrixSVG";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f6f3]/90 backdrop-blur-sm border-b border-[#e8e5de]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MatrixSmall />
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-light tracking-widest uppercase text-[#141414]">
            Матрица Судьбы
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://t.me/Ksenia_pride" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#141414] transition-colors">
            <Icon name="Send" fallback="Circle" size={18} />
          </a>
          <a href="https://www.instagram.com/kseniapride_?igsh=YmdqZWplajZ6OTl3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#141414] transition-colors">
            <Icon name="Instagram" fallback="Circle" size={18} />
          </a>
          <a
            href="#contact"
            className="hidden md:block border border-[#141414] text-[#141414] text-xs tracking-wider uppercase px-6 py-2.5 hover:bg-[#141414] hover:text-[#f7f6f3] transition-all duration-300"
          >
            Записаться
          </a>
        </div>
      </div>
    </nav>
  );
}
