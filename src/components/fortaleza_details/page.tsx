"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Bed, Flame, BedDouble, Footprints } from "lucide-react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full bg-white flex">
  <section className="w-full bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 p-6 md:p-0">
    <div
      className="container flex flex-col md:flex-row min-h-screen"
      data-aos="fade-up"
    >
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-left" data-aos="fade-ri">
        <Image
          src="/imagens/section5.jpeg"
          alt="Prédio"
          layout="intrinsic"
          width={300}
          height={200}
          objectFit="contain"
          className="block md:hidden rounded-xl"
        />

        <Image
          src="/imagens/section3-.png"
          alt="Prédio"
          layout="intrinsic"
          width={900}
          height={500}
          objectFit="cover"
          className="hidden md:block w-full h-full max-w-full transform"
        />
      </div>

      <div
       className="w-full md:w-1/2 text-white flex flex-col justify-center items-center md:min-h-screen mb:min-h-0 text-center md:text-left mt-10"
        data-aos=""
      >
         <h2 className="text-2xl md:text-3xl mb-8 font-montserrat font-bold text-black text-center">
              EMPREENDIMENTO COM<br />
              <span className="text-[#ffe9d0] font-bold font-swis721">
                20 ÁREAS DE LAZER
              </span>{" "}
            </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 rounded-md w-full justify-center mx-auto"
          data-aos="fade-up"
        >
          
          <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
            <div className="bg-gray-800 p-1 rounded-full">
              <BedDouble className="w-10 h-10 text-white" />
            </div>
            <p className="text-sm">
              2<strong className="font-montserrat"> dormitórios</strong>
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
            <div className="bg-gray-800 p-1 rounded-full">
              <Footprints className="w-10 h-10 text-white" />
            </div>
            <p className="text-sm">
              Pista de
              <strong className="font-montserrat"> caminhada</strong>
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
            <div className="bg-gray-800 p-1 rounded-full">
              <Bed className="w-10 h-10 text-white" />
            </div>
            <p className="text-sm">
              Unidades{" "}
              <strong className="font-montserrat">demi-suite</strong>
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
            <div className="bg-gray-800 p-1 rounded-full">
              <Flame className="w-10 h-10 text-white" />
            </div>
            <p className="text-sm">
              Sacada{" "}
              <strong className="font-montserrat">
                com churrasqueira
              </strong>
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/5547996984421/?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20empreendimento%20Fortaleza%21%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-[#ffe9d0] bg-[#402e32] font-semibold mt-5 py-3 px-6 md:py-5 md:px-8 rounded-full text-2xl md:text-2xl hover:bg-[#ffe9d0] hover:text-[#402e32] transition duration-400">
              Quero conhecer agora
            </button>
          </a>
        </div>


        <div className="mb-10 md:mb-0"></div>
      </div>
    </div>
  </section>
</div>

  );
}
