"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useState } from "react";

export default function Norden() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const images = [
    "/imagens/norden1.jpg",
    "/imagens/norden2.jpg",
    "/imagens/norden3.jpg",
    "/imagens/norden4.jpg",
    "/imagens/norden5.jpg",
    "/imagens/norden6.jpg",
    "/imagens/norden7.jpg",
    "/imagens/norden8.jpg",
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <>
      <section className="w-full bg-gray-800 p-24" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div
              className="md:w-2/3 text-white text-center md:text-left"
              data-aos="fade-right"
            >
              <p className="text-xl md:text-2xl font-swis721 text-[#ffe9d0]">
                Viva com conforto no Scire Norden,
                <span className="font-bold font-montserrat">
                  {" "}
                  localizado no Itoupava Norte.&nbsp;
                </span>
                Apartamentos bem planejados e
                <span className="font-bold font-montserrat">
                  {" "}
                  infraestrutura completa{" "}
                </span>
                para seu bem-estar, em uma&nbsp;
                <span className="font-bold font-montserrat">
                  localização estratégica&nbsp;
                </span>
                com fácil acesso a tudo o que você e sua família precisam.
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0 mx-auto">
              <Image
                src="/imagens/logo-norden.png"
                alt="Logo Scire Terrasse"
                width={200}
                height={200}
                className="md:w-64"
                data-aos="fade-ri"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Imagem ${index + 1}`}
                width={400}
                height={400}
                className="rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-115 cursor-pointer"
                onClick={() => openModal(src)}
              />
            ))}
          </div>

          {selectedImage && (
            <div
              className={`fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeModal}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white text-3xl font-bold p-2 rounded-full bg-gray-700 hover:bg-gray-600 hover:rotate-90 transition-transform"
              >
                ✕
              </button>

              <div
                className={`relative w-[80%] transform transition-transform duration-300 ${
                  isVisible ? "scale-100" : "scale-95"
                }`}
              >
                <Image
                  src={selectedImage}
                  alt="Imagem ampliada"
                  width={1200}
                  height={1200}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
