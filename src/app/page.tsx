"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { GiTennisRacket } from "react-icons/gi";
import {
  Bed,
  Flame,
  BedDouble,
  Clapperboard,
  Sun,
  Footprints,
  Car,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const images = [
    "/imagens/terrace-1.png",
    "/imagens/terrace-2.png",
    "/imagens/terrace-3.png",
    "/imagens/terrace-4.png",
    "/imagens/terrace-5.png",
    "/imagens/terrace-6.png",
    "/imagens/terrace-7.png",
    "/imagens/terrace-8.png",
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
      <section className="min-h-screen bg-orange-600 md:bg-gradient-to-r md:from-orange-400 md:via-orange-600 md:to-[#402e32] flex items-center p-16">
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
                  empreendimentos exclusivos
                </span>{" "}
                para quem busca
                <span className="text-[#402e32] font-montserrat font-bold">
                  {" "}
                  lazer, conforto{" "}
                </span>{" "}
                e
                <span className="text-[#402e32] font-montserrat font-bold">
                  {" "}
                  qualidade de vida.
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

      <section className="w-full bg-gray-800" data-aos="fade-up">
        <div className="w-full p-24">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
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
                className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
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
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="w-full bg-white flex">
        <section className="w-full bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400">
          <div
            className="container flex flex-col md:flex-row min-h-screen items-center"
            data-aos="fade-up"
          >
            <div className="w-full md:w-1/2 relative flex" data-aos="fade-ri">
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
              className="w-full md:w-1/2 text-white flex flex-col justify-center md:text-left h-full" style={{ marginLeft: "-50px" }}
              data-aos="fade-right"
            >
              <h2 className="text-center text-2xl md:text-3xl mb-8 font-montserrat font-bold text-[#ffe9d0]">
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
                className="text-xl md:text-3xl mb-4 text-center font-swis721 text-[#ffe9d0]"
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
                  <button className="text-[#ffe9d0] font-semibold mt-5 py-3 px-6 md:py-5 md:px-8 rounded-full text-xl md:text-2xl border hover:bg-orange-400 hover:text-white transition duration-400">
                    Quero conhecer agora
                  </button>
                </a>
              </div>

              <div className="mb-10 md:mb-0"></div>
            </div>
          </div>
        </section>
      </div>





      {/* Seção 4 - Descrição com logo e imagens arredondadas fortaleza */}
      <section className="bg-gray-800 py-8" data-aos="fade-up">
        <div className="px-4">
          {/* Contêiner de texto e logo */}
          <div
            className="flex flex-col md:flex-row justify-between items-start mb-8"
            data-aos="fade-ri"
          >
            {/* Texto à esquerda (centralizado no mobile) */}
            <div className="md:w-2/3 text-white text-center md:text-left">
              <p className="text-xl md:text-3xl font-swis721">
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

            {/* Logo centralizado */}
            <div
              className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0 mx-auto"
              data-aos="fade-right"
            >
              <Image
                src="/imagens/Logo Fortaleza Branco.png"
                alt="Logo Scire Fortaleza"
                width={200} // Ajuste a largura para a resolução ideal
                height={200}
                className="md:w-64"
              />
            </div>
          </div>

          {/* Imagens arredondadas - Responsivo: 2 colunas no mobile, 4 colunas no desktop */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-aos="fade-up"
          >
            {/* Primeira linha de imagens */}
            <Image
              src="/imagens/fortaleza-1.png"
              alt="Imagem 1"
              width={400} // Ajuste a largura para a resolução ideal
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/fortaleza-2.png"
              alt="Imagem 2"
              width={400} // Ajuste a largura para a resolução ideal
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/fortaleza-3.png"
              alt="Imagem 3"
              width={400} // Ajuste a largura para a resolução ideal
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/fortaleza-4.png"
              alt="Imagem 4"
              width={400} // Ajuste a largura para a resolução ideal
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />

            {/* Segunda linha de imagens */}
            <Image
              src="/imagens/fortaleza-5.png"
              alt="Imagem 5"
              width={400} // Ajuste a largura para a resolução ideal
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/fortaleza-6.png"
              alt="Imagem 6"
              width={400} // Ajuste a largura para a resolução ideal
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/fortaleza-7.png"
              alt="Imagem 7"
              width={400} // Ajuste a largura para a resolução ideal
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/fortaleza-8.png"
              alt="Imagem 8"
              width={400} // Ajuste a largura para a resolução ideal
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Seção 5 - descrição do prédio fortaleza */}
      <div className="w-full bg-white flex justify-center items-center">
        <section className="w-full bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 py-10 md:py-24 min-h-screen">
          <div
            className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0"
            data-aos="fade-up"
          >
            {/* Imagem do prédio à esquerda */}
            <div
              className="w-full md:w-1/2 relative mb-6 md:mb-10 flex justify-center md:justify-center mt-4 md:mt-10"
              data-aos="fade-ri"
            >
              {/* Imagem para mobile */}
              <Image
                src="/imagens/section5.jpeg"
                alt="Prédio"
                layout="intrinsic"
                width={300}
                height={200}
                objectFit="contain"
                className="block md:hidden rounded-xl" // Exibe apenas no mobile
              />

              {/* Imagem para desktop */}
              <Image
                src="/imagens/section3-.png"
                alt="Prédio"
                layout="intrinsic"
                width={900} // Aumenta o tamanho da imagem no desktop
                height={500} // Ajusta a altura também para um tamanho maior
                objectFit="cover"
                className="hidden md:block w-full h-full max-w-full transform"
              />
            </div>

            {/* Texto e ícones à direita */}
            <div
              className="w-full md:w-1/2 text-white md:pl-14 md:pr-10 md:text-left"
              data-aos="fade-right"
            >
              {/* Ícones e descrições */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 rounded-md w-full justify-center mx-auto"
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
                      {" "}
                      com churrasqueira
                    </strong>
                  </p>
                </div>
              </div>

              {/* botão */}
              <div className="flex justify-center">
                <a
                  href="https://wa.me/5547996984421"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white font-semibold py-3 px-6 md:py-5 md:px-8 rounded-full text-xl md:text-4xl border-2 hover:bg-orange-400 hover:text-white transition duration-400">
                    Quero conhecer agora!
                  </button>
                </a>
              </div>

              {/* Margem inferior para o botão no mobile */}
              <div className="mb-10 md:mb-0"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Seção 6 - Descrição com logo e imagens arredondadas norden */}
      <section className="w-full bg-gray-800 py-8" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div
              className="md:w-2/3 text-white text-center md:text-left"
              data-aos="fade-right"
            >
              <p className="text-xl md:text-2xl font-swis721">
                Viva com conforto no Scire Norden,
                <span className="font-bold font-montserrat">
                  {" "}
                  localizado no Itoupava Norte.
                </span>
                Apartamentos bem planejados e
                <span className="font-bold font-montserrat">
                  {" "}
                  infraestrutura completa{" "}
                </span>
                para seu bem-estar, em uma
                <span className="font-bold font-montserrat">
                  localização estratégica
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

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-aos="fade-up"
          >
            <Image
              src="/imagens/norden-1.png"
              alt="Imagem 1"
              width={400}
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            />
            <Image
              src="/imagens/norden-2.png"
              alt="Imagem 2"
              width={400}
              height={400}
              className="norden-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/norden-3.png"
              alt="Imagem 3"
              width={400}
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/norden-4.png"
              alt="Imagem 4"
              width={400}
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/norden-5.png"
              alt="Imagem 5"
              width={400}
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/norden-6.png"
              alt="Imagem 6"
              width={400}
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/norden-7.png"
              alt="Imagem 7"
              width={400}
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <Image
              src="/imagens/norden-8.png"
              alt="Imagem 8"
              width={400}
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Seção 7 - descrição do prédio norden */}
      <div className="w-full bg-white flex justify-center items-center">
        <section className="w-full bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 py-10 md:py-24 min-h-screen">
          <div
            className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0"
            data-aos="fade-up"
          >
            {/* Imagem do prédio à esquerda */}
            <div
              className="w-full md:w-1/2 relative mb-6 md:mb-10 flex justify-center md:justify-center mt-4 md:mt-10"
              data-aos="fade-ri"
            >
              {/* Imagem para mobile */}
              <Image
                src="/imagens/section-7.jpg"
                alt="Prédio"
                layout="intrinsic"
                width={300}
                height={200}
                objectFit="contain"
                className="block md:hidden rounded-xl" // Exibe apenas no mobile
              />

              {/* Imagem para desktop */}
              <Image
                src="/imagens/section7.png"
                alt="Prédio"
                layout="intrinsic"
                width={900} // Aumenta o tamanho da imagem no desktop
                height={500} // Ajusta a altura também para um tamanho maior
                objectFit="cover"
                className="hidden md:block w-full h-full max-w-full transform"
              />
            </div>

            {/* Texto e ícones à direita */}
            <div
              className="w-full md:w-1/2 text-white md:pl-14 md:pr-10 md:text-left"
              data-aos="fade-right"
            >
              {/* Ícones e descrições */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 rounded-md w-full justify-center mx-auto"
                data-aos="fade-up"
              >
                <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
                  <div className="bg-gray-800 p-1 rounded-full">
                    <Car className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm">
                    Opção
                    <strong className="font-montserrat">
                      {" "}
                      de vaga coberta
                    </strong>
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
                  <div className="bg-gray-800 p-1 rounded-full">
                    <BedDouble className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm">
                    {" "}
                    <strong>2 dormitórios </strong>sendo
                    <strong className="font-montserrat"> 1 suite</strong>
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
                  <div className="bg-gray-800 p-1 rounded-full">
                    <Flame className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm">
                    Sacada com{" "}
                    <strong className="font-montserrat"> churrasqueira</strong>
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-white text-black rounded-full p-2">
                  <div className="bg-gray-800 p-1 rounded-full">
                    <GiTennisRacket className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm">
                    Quadra de{" "}
                    <strong className="font-montserrat">Beach Tennis</strong>
                  </p>
                </div>
              </div>

              {/* botão */}
              <div className="flex justify-center">
                <a
                  href="https://wa.me/5547996984421"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white font-semibold py-3 px-6 md:py-5 md:px-8 rounded-full text-xl md:text-4xl border-2 hover:bg-orange-400 hover:text-white transition duration-400">
                    Quero conhecer agora!
                  </button>
                </a>
              </div>

              {/* Margem inferior para o botão no mobile */}
              <div className="mb-10 md:mb-0"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Seção 8 - final */}
      <section
        className="min-h-screen bg-gradient-to-tl from-orange-600 to-black md:from-orange-400 md:via-orange-600 md:to-black flex items-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-2">
          <div
            className="md:w-1/2 text-center md:text-left text-white flex flex-col justify-center mt-2 md:mt-0"
            data-aos="fade-right"
          >
            <h1 className="text-xl md:text-5xl font-semibold leading-relaxed mb-3 font-montserrat">
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
