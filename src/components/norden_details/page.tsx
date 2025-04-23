"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { GiTennisRacket } from "react-icons/gi";
import { Flame, BedDouble, Car } from "lucide-react";

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
    <div className="container flex flex-col md:flex-row min-h-screen" data-aos="fade-up">
      
      {/* Imagem para Mobile */}
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-left" data-aos="fade-right">
        <Image
          src="/imagens/section-7.jpg"
          alt="Prédio"
          layout="intrinsic"
          width={300}
          height={200}
          objectFit="contain"
          className="block md:hidden rounded-xl"
        />

        {/* Imagem para Desktop */}
        <Image
          src="/imagens/section7.png"
          alt="Prédio"
          layout="intrinsic"
          width={900}
          height={500}
          objectFit="cover"
          className="hidden md:block w-full h-full max-w-full transform"
        />
      </div>

      {/* Conteúdo ao lado da imagem */}
      <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center md:min-h-screen text-center md:text-left mt-10" data-aos="fade-right">

      <h2 className="text-2xl md:text-3xl mb-8 font-montserrat font-bold text-[#ffe9d0] text-center">
              MORAR BEM<br />
              <span className=" text-black font-bold font-swis721">
               ESTÁ AO SEU ALCANCE
              </span>{" "}
            </h2>
        
        {/* Descrição e Características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 rounded-md w-full justify-center mx-auto" data-aos="fade-up">
          <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
            <div className="bg-gray-800 p-1 rounded-full">
              <Car className="w-10 h-10 text-white" />
            </div>
            <p className="text-sm">
              Opção <strong className="font-montserrat"> de vaga coberta</strong>
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
            <div className="bg-gray-800 p-1 rounded-full">
              <BedDouble className="w-10 h-10 text-white" />
            </div>
            <p className="text-sm">
              <strong>2 dormitórios</strong> sendo <strong className="font-montserrat">1 suite</strong>
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
            <div className="bg-gray-800 p-1 rounded-full">
              <Flame className="w-10 h-10 text-white" />
            </div>
            <p className="text-sm">
              Sacada com <strong className="font-montserrat">churrasqueira</strong>
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
            <div className="bg-gray-800 p-1 rounded-full">
              <GiTennisRacket className="w-10 h-10 text-white" />
            </div>
            <p className="text-sm">
              Quadra de <strong className="font-montserrat">Beach Tennis</strong>
            </p>
          </div>
        </div>

        {/* Botão de WhatsApp */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/5547996984421/?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20empreendimento%20Norden!%21%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-[#ffe9d0] bg-[#402e32] font-semibold mt-5 py-3 px-6 md:py-5 md:px-8 rounded-full text-xl md:text-2xl hover:bg-[#ffe9d0] hover:text-[#402e32] transition duration-400">
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
