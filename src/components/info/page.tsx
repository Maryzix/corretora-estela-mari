"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section
        className="min-h-screen bg-gray-800 p-6 md:p-24 flex items-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-2">
          <div
            className="md:w-1/2 text-center md:text-left text-white flex flex-col justify-center mt-2 md:mt-0"
            data-aos="fade-right"
          >
            <h1 className="text-xl md:text-4xl font-semibold leading-relaxed mb-5 pr-6 font-montserrat">
              Agora que você já conhece nossos Home Clubs, que tal conversar
              comigo e ter mais informações?
            </h1>

            <a
              href="https://wa.me/5547996984421"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[#402e32] bg-[#ffe9d0] font-semibold mt-5 py-3 px-6 md:py-5 md:px-8 rounded-full text-xl md:text-2xl hover:bg-[#402e32] hover:text-[#ffe9d0] transition duration-400">
                Entre em contato comigo pelo WhatsApp e saiba mais!
              </button>
            </a>
          </div>

          <div className="relative mt-8">
            <Image
              src="/imagens/imagem teste.png"
              alt="Prédios"
              layout="intrinsic"
              width={700}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
