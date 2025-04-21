"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import { Flame, BedDouble, Clapperboard, Sun } from "lucide-react";

export default function Terrasse_Details() {
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
              src="/imagens/teste2.jpg"
              alt="Prédio"
              layout="intrinsic"
              width={300}
              height={200}
              objectFit="contain"
              className="block md:hidden rounded-xl"
            />

            <Image
              src="/imagens/section3.png"
              alt="Prédio"
              layout="intrinsic"
              width={900}
              height={500}
              objectFit="cover"
              className="hidden md:block w-full h-full max-w-full transform"
            />
          </div>

          <div
            className="w-full md:w-1/2 text-white flex flex-col justify-center items-center min-h-screen text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-2xl md:text-3xl mb-8 font-montserrat font-bold text-[#ffe9d0] text-center">
              1º EMPREENDIMENTO <br />
              <span className="text-black font-bold font-swis721">
                SCIRE DE BLUMENAU
              </span>{" "}
              COM ROOFTOP
            </h2>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 rounded-md w-full justify-center mx-auto"
              data-aos="fade-up"
            >
              <div className="flex items-center space-x-2 bg-[#ffe9d0] text-black rounded-full p-2">
                <div className="bg-gray-800 p-1 rounded-full">
                  <BedDouble className="w-10 h-10 p-1 text-white" />
                </div>
                <p className="text-sm">
                  Unidades <strong className="font-montserrat">Studio</strong>
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-[#ffe9d0] text-black rounded-full p-2">
                <div className="bg-gray-800 p-1 rounded-full">
                  <Flame className="w-10 h-10 p-1 text-white" />
                </div>
                <p className="text-sm">
                  Suite
                  <strong className="font-montserrat">
                    {" "}
                    com churrasqueira na sacada
                  </strong>
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-[#ffe9d0] text-black rounded-full p-2">
                <div className="bg-gray-800 p-1 rounded-full">
                  <Clapperboard className="w-10 h-10 p-1 text-white" />
                </div>
                <p className="text-sm">
                  Com <strong className="font-montserrat">Home Cinema</strong>
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-[#ffe9d0] text-black rounded-full p-2">
                <div className="bg-gray-800 p-1 rounded-full">
                  <Sun className="w-10 h-10 p-1 text-white" />
                </div>
                <p className="text-sm">
                  Com <strong className="font-montserrat">Solário</strong>
                </p>
              </div>
            </div>

            <p
              className="text-xl md:text-3xl mb-4 font-swis721 text-[#ffe9d0]"
              data-aos="fade-up"
            >
              Renda comprovada à partir de{" "}
              <strong className="font-montserrat">R$ 7.200,00</strong>
            </p>

            <div className="flex justify-center" data-aos="fade-up">
              <a
                href="https://wa.me/5547996984421"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-[#ffe9d0] bg-[#402e32] font-semibold mt-5 py-3 px-6 md:py-5 md:px-8 rounded-full text-xl md:text-2xl hover:bg-[#ffe9d0] hover:text-[#402e32] transition duration-400">
                  Quero conhecer agora
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
