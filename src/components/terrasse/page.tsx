"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useState } from "react";

export default function Terrasse() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out",
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const images = [
    "/imagens/terrace1.jpg",
    "/imagens/terrace2.jpg",
    "/imagens/terrace3.jpg",
    "/imagens/terrace4.jpg",
    "/imagens/terrace5.jpg",
    "/imagens/terrace6.jpg",
    "/imagens/terrace7.jpg",
    "/imagens/terrace8.jpg",
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
      <section className="w-full bg-gray-800">
        <div className="md:p-24 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 " data-aos="fade-ri">
            <div className="md:w-2/3 text-[#ffe9d0] text-center md:text-left mb-6">
              <p className="text-xl md:text-3xl font-swis721">
                O Scire Terrasse está no{" "}
                <span className="font-bold font-montserrat">
                  Bairro Vorstadt
                </span>
                , uma região estratégica com fácil acesso à BR-470. O bairro
                oferece{" "}
                <span className="font-bold font-montserrat">
                  infraestrutura completa
                </span>
                , com comércio, escolas e lazer, garantindo{" "}
                <span className="font-bold font-montserrat">
                  qualidade de vida
                </span>{" "}
                e <span className="font-bold font-montserrat">praticidade</span>
                .
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0 mx-auto">
              <Image
                src="/imagens/terrasse-logo.png"
                alt="Logo Scire Terrasse"
                width={200}
                height={200}
                className="md:w-64"
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
