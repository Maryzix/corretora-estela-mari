import Link from "next/link";
import { Instagram, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center bg-gray-700 py-2">
    <div className="flex flex-col">
  
      {/* Copyright */}
      <p className="text-xs text-white leading-snug text-center pb-2">
        © 2025 Home Clubs Completos — Todos os Direitos Reservados. Desenvolvido por:
      </p>
  
      {/* Mary e Ana na mesma linha */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm">
        
        {/* Mary */}
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Mary Lindsen</span>
            <Link href="https://instagram.com/" target="_blank" aria-label="Instagram da Mary">
              <Instagram className="w-5 h-5 text-pink-500 hover:scale-110 transition" />
            </Link>
            <Link href="https://wa.me/5551985503101" target="_blank" aria-label="WhatsApp da Mary">
              <PhoneCall className="w-5 h-5 text-green-600 hover:scale-110 transition" />
            </Link>
          </div>
        </div>
  
        {/* Ana */}
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Ana Carolina</span>
            <Link href="https://instagram.com/" target="_blank" aria-label="Instagram da Ana">
              <Instagram className="w-5 h-5 text-pink-500 hover:scale-110 transition" />
            </Link>
            <Link href="https://wa.me/5551991090199" target="_blank" aria-label="WhatsApp da Ana">
              <PhoneCall className="w-5 h-5 text-green-600 hover:scale-110 transition" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}
