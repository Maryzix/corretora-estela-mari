"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useState } from "react";

export default function Fortaleza() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const images = [
    "/imagens/fortaleza1.jpg",
    "/imagens/fortaleza2.jpg",
    "/imagens/fortaleza3.jpg",
    "/imagens/fortaleza4.jpg",
    "/imagens/fortaleza5.jpg",
    "/imagens/fortaleza6.jpg",
    "/imagens/fortaleza7.jpg",
    "/imagens/fortaleza8.jpg",
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
      <section className="bg-gray-800 p-24" data-aos="fade-up">
        <div className="px-4">
          <div
            className="flex flex-col md:flex-row justify-between items-start mb-8"
            data-aos="fade-ri"
          >
            <div className="md:w-2/3 text-white text-center md:text-left">
              <p className="text-xl md:text-3xl font-swis721 text-[#ffe9d0]">
                O Scire Fortaleza está a poucos minutos do Centro, do terminal
                rodoviário e do{" "}
                <span className="font-bold font-montserrat">
                  Shopping Park Europeu
                </span>{" "}
                além de contar com mercados, farmácias e escolas nas
                proximidades. Em frente a um centro de educação infantil e com{" "}
                <span className="font-bold font-montserrat">
                  fácil acesso à BR-470
                </span>{" "}
                O lugar perfeito para sua nova fase!
              </p>
            </div>

            <div
              className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0 mx-auto"
              data-aos="fade-right"
            >
              <Image
                src="/imagens/Logo Fortaleza Branco.png"
                alt="Logo Scire Fortaleza"
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
