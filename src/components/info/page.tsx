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
        className="min-h-screen bg-gradient-to-tl from-orange-600 to-black md:from-orange-400 md:via-orange-600 md:to-black flex items-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-2">
          <div
            className="md:w-1/2 text-center md:text-left text-white flex flex-col justify-center mt-2 md:mt-0"
            data-aos="fade-right"
          >
            <h1 className="text-xl md:text-3xl font-semibold leading-relaxed mb-3 font-montserrat">
              Agora que você já conhece nossos Home Clubs, que tal conversar
              comigo e ter mais informações?
            </h1>

            <a
              href="https://wa.me/5547996984421"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <button className="text-white font-montserrat py-2 px-5 md:py-4 md:px-10 md:text-3xl rounded-full text-2xl border-2 border-white bg-black shadow-inner hover:bg-orange-200 hover:text-black transition duration-400">
                Saiba Mais!
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
