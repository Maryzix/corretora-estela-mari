import Link from "next/link";
import { Instagram, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center">
      <div className="p-8 flex flex-col items-center space-y-2">
        <p className="text-lg">
          2025 Home Clubs Completos - Todos os Direitos Reservados. Desenvolvido
          por:
        </p>

        <div className="flex items-center gap-2 justify-center">
          <span className="font-bold">Mary Lindsen</span>
          <Link href="https://instagram.com/" target="_blank">
            <Instagram />
          </Link>
          <Link href="https://wa.me/5551985503101" target="_blank">
            <PhoneCall />
          </Link>
          e<span className="font-bold">Ana Carolina</span>
          <Link href="https://instagram.com/" target="_blank">
            <Instagram />
          </Link>
          <Link href="https://wa.me/5551991090199" target="_blank">
            <PhoneCall />
          </Link>
        </div>
      </div>
    </footer>
  );
}
