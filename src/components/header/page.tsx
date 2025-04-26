"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-orange-600 md:bg-gradient-to-r md:from-orange-400 md:via-orange-600 md:to-[#402e32] flex items-center md:p-16 p-6">
    {/* Logo Mobile */}
    <div className="absolute top-0 right-0 p-4 z-10 md:hidden">
      <Image
        src="/imagens/logo-estelapreta.png"
        alt="Logo Mobile"
        width={160}
        height={160}
        className="w-28"
      />
    </div>
  
    {/* Logo Desktop */}
    <div className="hidden md:block absolute top-0 left-0 p-6 z-10">
      <Image
        src="/imagens/logo-estela-branca.png"
        alt="Logo Desktop"
        width={160}
        height={160}
        className="w-64"
      />
    </div>
    
  
    <div className="mx-auto flex flex-col justify-between md:flex-row items-center p-4 md:p-10 min-h-screen">
      <div
        className="md:mr-30 w-full md:w-1/2 text-left text-white"
        data-aos="fade-up"
      >
        <h1 className="text-xl md:text-2xl font-swis721 mb-2 text-[#ffe9d0]">
          CONHEÇA NOSSOS
        </h1>
        <p className="text-3xl md:text-6xl font-bold font-montserrat text-[#fff7ef]">
          HOME CLUBS
        </p>
        <p className="text-3xl md:text-6xl font-bold font-montserrat text-[#fff7ef]">
          COMPLETOS
        </p>
  
        <div>
          <p
            className="relative inline-block mt-4 text-white text-lg md:text-xl bg-[#402e32] px-6 md:px-8 py-3 md:py-4 shadow-md font-bold"
            style={{ clipPath: "polygon(100% 0, 85% 100%, 0 100%, 0 0)" }}
            data-aos="fade-up"
          >
            Em Blumenau/SC &nbsp;&nbsp;&nbsp;
          </p>
        </div>
  
        <div className="mt-5 text-2xl md:text-4xl" data-aos="fade-up">
          <p className="font-swis721 font-bold">
            Três{" "}
            <span className="text-[#402e32] font-montserrat font-bold">
              empreendimentos exclusivos,
            </span>{" "}
            ideais para quem valoriza
            <span className="text-[#402e32] font-montserrat font-bold">
              {" "} lazer, conforto{" "}
            </span>{" "}
            e
            <span className="text-[#402e32] font-montserrat font-bold">
              {" "} qualidade de vida.
            </span>
          </p>
        </div>
      </div>
  
      <div
        className="flex justify-center w-full mt-6 md:mt-0 md:w-auto self-end md:self-center"
        data-aos="fade-up"
      >
        <Image
          src="/imagens/empreendimentos-c-logo-2.png"
          alt="Prédios"
          layout="intrinsic"
          width={750}
          height={350}
          objectFit="contain"
          className="rounded-md"
        />
      </div>
    </div>
  </section>
  
  );
}
