
import Image from "next/image";
import {Grid, Bed, Flame, BedDouble, Clapperboard, Sun } from "lucide-react";


export default function Home() {
  return (
    <>
{/* Seção 1 - Cores laranja e preta com prédios */}
<section className="min-h-screen bg-gradient-to-r from-orange-400 via-orange-600 to-black flex items-center">
  <div className="mx-auto flex flex-col md:flex-row items-center justify-between md:p-10">
    {/* Texto à esquerda */}
    <div className="mr-40 md:w-1/2 text-left text-white">
      <h1 className="text-4xl font-swis721 mb-2">CONHEÇA NOSSOS</h1>
      <p className="text-4xl md:text-6xl font-bold font-montserrat">HOME CLUBS</p>
      <p className="text-4xl md:text-6xl font-bold font-montserrat">COMPLETOS</p>
      <p className="relative inline-block mt-4 text-white text-xl bg-black px-6 py-3 pr-20 shadow-md" style={{ clipPath: "polygon(100% 0, 80% 90%, 0 90%, 0 0)" }}>
        Em Blumenau/SC
      </p>

      <div className="mt-5 text-4xl">
        <p className="font-swis721">Três <span className="text-black font-montserrat font-bold">empreendimentos exclusivos</span></p>
        <p className="font-swis721">para quem busca <span className="text-black font-montserrat font-bold">lazer, conforto</span></p>
        <p>e <span className="text-black font-montserrat font-bold">qualidade de vida.</span></p>
      </div>
    </div>

    {/* Imagem à direita */}
    <div className="flex justify-between mt-6 ml-4 md:mt-0">
      <Image
        src="/imagens/empreendimentos-c-logo.png"
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
  {/* Seção 2 - Descrição com logo e imagens arredondadas */}
<section className="w-full bg-gray-800 py-16">
  <div className="container mx-auto px-4 md:px-8">
    {/* Contêiner de texto e logo */}
    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
      {/* Texto à esquerda */}
      <div className="md:w-2/3 text-white">
        <p className="text-xl md:text-3xl font-swis721">
          O Scire Terrasse está no <span className="font-bold font-montserrat">bairro Vorstadt</span>, uma região estratégica com fácil acesso à BR-470.
        </p>
        <p className="mt-4 text-sm md:text-lg">
          O bairro oferece <span className="font-bold font-montserrat">infraestrutura completa</span>, com comércio, escolas e lazer, garantindo <span className="font-bold font-montserrat">qualidade de vida</span> e <span className="font-bold font-montserrat">praticidade</span>.
        </p>
      </div>

      {/* Logo centralizado */}
      <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0 mx-auto">
        <Image 
        src="/imagens/terrasse-logo.png" 
        alt="Logo Scire Terrasse" 
        width={200}  // Ajuste a largura para a resolução ideal
        height={200} 
        className="md:w-64" />
      </div>
    </div>

    {/* Imagens arredondadas - Responsivo: 2 colunas no mobile, 4 colunas no desktop */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Primeira linha de imagens */}
      <Image
        src="/imagens/terrace-1-foco.png"
        alt="Imagem 1"
        width={400}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      />
      <Image
        src="/imagens/terrace-2.png"
        alt="Imagem 2"
        width={400}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <Image
        src="/imagens/terrace-3.png"
        alt="Imagem 3"
        width={400}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <Image
        src="/imagens/terrace-4-foco.png"
        alt="Imagem 4"
        width={400}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      />

      {/* Segunda linha de imagens */}
      <Image
        src="/imagens/terrace-5-foco.png"
        alt="Imagem 5"
        width={400}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <Image
        src="/imagens/terrace-6.png"
        alt="Imagem 6"
        width={400}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <Image
        src="/imagens/terrace-7.png"
        alt="Imagem 7"
        width={400}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <Image
        src="/imagens/terrace-8-foco.png"
        alt="Imagem 8"
        width={400}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
    </div>
  </div>
</section>
{/* Seção 3 renda comprovada */}
<div className="w-full bg-white flex justify-center items-center">
  <section className="w-full bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0"> {/* Ajustado para flex-col em telas pequenas */}
      
      {/* Imagem do prédio à esquerda, colada na borda */}
      <div className="md:w-1/2 relative mb-6 md:mb-0">
        <Image
          src="/imagens/section3.png" // Substitua pelo caminho correto da sua imagem
          alt="Prédio"
          layout="intrinsic" // Responsividade na imagem
          width={400}
          height={300}
          objectFit="cover"
          className="w-full h-full" // A imagem vai cobrir toda a div
        />
      </div>

      {/* Texto e botões à direita */}
      <div className="md:w-1/2 text-white md:pl-10">
        <h2 className="text-center text-4xl md:text-4xl mb-4 font-montserrat font-bold">
          1º EMPREENDIMENTO <span className="text-black font-semibold font-swis721 ">SCIRE</span> <br /> <span className="text-black font-semibold font-swis721 ">DE BLUMENAU </span>COM ROOFTOP
        </h2>
        
        {/* Ícones e descrições */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 rounded-md w-full justify-center mx-auto">
          <div className="flex items-center space-x-2 bg-white text-black rounded-full">
            <div className="bg-gray-800 p-1">
              <BedDouble className="w-10 h-10 text-white" />
            </div>
            <p>Unidades <strong className="font-montserrat">Studio</strong></p>
          </div>
          <div className="flex items-center space-x-2 bg-white text-black rounded-full ">
            <div className="bg-gray-800 p-1 ">
              <Flame className="w-10 h-10 text-white" />
            </div>
            <p>Suite<strong className="font-montserrat"> com churrasqueira na sacada</strong></p>
          </div>
          <div className="flex items-center space-x-2 bg-white text-black rounded-full ">
            <div className="bg-gray-800 p-1 ">
              <Clapperboard className="w-10 h-10 text-white" />
            </div>
            <p>Com <strong className="font-montserrat">Home Cinema</strong></p>
          </div>
          <div className="flex items-center space-x-2 bg-white text-black rounded-full ">
            <div className="bg-gray-800 p-1 ">
              <Sun className="w-10 h-10 text-white" />
            </div>
            <p>Com <strong className="font-montserrat">Solário</strong></p>
          </div>
        </div>

        {/* Renda e botão */}
        <p className="text-3xl mb-4 text-center font-swis721">
          Renda comprovada a partir de <strong className="font-montserrat">R$7.200,00</strong>
        </p>

        <div className="flex justify-center">
          <a
            href="https://wa.me/5547996984421"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-white font-semibold py-3 px-6 md:py-5 md:px-8 rounded-full text-xl md:text-4xl border hover:bg-orange-4000 hover:text-white transition duration-400">
              Quero conhecer agora
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

      {/* Seção 4 - Descrição com logo e imagens arredondadas */}
<section className="w-full bg-gray-800 py-16">
  <div className="container mx-auto px-8">
    {/* Contêiner de texto e logo */}
    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
      {/* Texto à esquerda */}
      <div className="md:w-2/3 text-white">
        <h2 className="text-2xl">
        O Scire Fortaleza está a poucos minutos do Centro, do terminal rodoviário e do <span className="font-bold">Shopping Park Europeu</span>, além de contar com mercados, farmácias e escolas nas proximidades. Em frente a um centro de educação infantil e com <span className="font-bold">fácil acesso à BR-470.</span> O lugar perfeito para sua nova fase!
        </h2>
      </div>

      {/* Logo à direita */}
      <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
        <Image 
        src="/imagens/Logo Fortaleza Branco.png" 
        alt="Logo Fortaleza" 
        width={400}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="w-64" />
      </div>
    </div>

    {/* Imagens arredondadas - 4 imagens em cima e 4 embaixo */}
    <div className="grid grid-cols-4 gap-4">
      {/* Primeira linha de imagens */}
      <Image 
      src="/imagens/fortaleza-foco-1.png" 
      alt="Imagem 1" 
      width={400}  // Ajuste a largura para a resolução ideal
      height={400} 
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"/>
      <Image 
      src="/imagens/fortaleza-2.png"
      alt="Imagem 2"
      width={400}  // Ajuste a largura para a resolução ideal
      height={400}  
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/fortaleza-3.png" 
      alt="Imagem 3"
      width={400}  // Ajuste a largura para a resolução ideal
      height={400}  
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/fortaleza-foco-4.png" 
      alt="Imagem 4"
      width={400}  // Ajuste a largura para a resolução ideal
      height={400}  
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      
      {/* Segunda linha de imagens */}
      <Image 
      src="/imagens/fortaleza-foco-5.png" 
      alt="image"
      width={400}  // Ajuste a largura para a resolução ideal
      height={400}  
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/fortaleza-6.png"  
      alt="image"
      width={400}  // Ajuste a largura para a resolução ideal
      height={400}  
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/fortaleza-7.png"  
      alt="image"
      width={400}  // Ajuste a largura para a resolução ideal
      height={400}  
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/fortaleza-foco-8.png"  
      alt="image"
      width={400}  // Ajuste a largura para a resolução ideal
      height={400}  
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
    </div>
   </div>
  </section>
  {/* Seção 5 - descrição do prédio  */}
  <div className="relative w-full h-screen">
      <Image
        src="/imagens/section3-.png" // Substitua pela URL correta da imagem
        alt="Imagem do empreendimento"
        layout="intrinsic"  // Alterado para intrinsic
        width={910}  // Ajuste a largura para a resolução ideal
        height={900}  // Ajuste a altura para a resolução ideal
        objectFit="cover" // A imagem se ajustará sem cortar, cobrindo toda a tela
        className="z-0 opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-orange-800 to-transparent"></div>
      <div className="absolute right-28 top-1/4 text-white max-w-md text-2xl">
      <ul className="space-y-6">
          <li className="flex items-center gap-4">
            <BedDouble className="w-10 h-10" /> 2 dormitórios
          </li>
          <li className="flex items-center gap-4">
            <Grid className="w-10 h-10" /> 18 andares totais e 17 andares residenciais
          </li>
          <li className="flex items-center gap-4">
            <Bed className="w-10 h-10" /> Unidades demi-suíte
          </li>
          <li className="flex items-center gap-4">
            <Flame className="w-10 h-10" /> Sacada com churrasqueira
          </li>
        </ul>    
        <div className="ml-5">
          <a
            href="https://wa.me/5547996984421"
            target="_blank"
            rel="noopener noreferrer">
              <button className="mt-8 bg-orange-400 text-white py-3 px-6 rounded-full text-3xl shadow-lg hover:bg-orange-4000 border border-white"> Quero + Informações!</button>
          </a>
        </div>
     </div>
  </div>
  {/* Seção 6 - Descrição com logo e imagens arredondadas */}
<section className="w-full bg-gray-800 py-16">
  <div className="container mx-auto px-8">
    {/* Contêiner de texto e logo */}
    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
      {/* Texto à esquerda */}
      <div className="md:w-2/3 text-white">
        <h2 className="text-3xl">
        Viva com conforto no Scire Norden, <span className="font-bold">localizado no Itoupava Norte.</span> Apartamentos bem planejados e <span className="font-bold">infraestrutura completa </span>para seu bem-estar, em uma <span className="font-bold">localização estratégica</span> com fácil acesso a tudo o que você e sua família precisam.
        </h2>
      </div>

      {/* Logo à direita */}
      <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
        <Image 
        src="/imagens/logo-norden.png" 
        alt="Logo Fortaleza" 
        width={64}  // Ajuste a largura para a resolução ideal
        height={400} 
        className="w-64" />
      </div>
    </div>

    {/* Imagens arredondadas - 4 imagens em cima e 4 embaixo */}
    <div className="grid grid-cols-4 gap-4">
      {/* Primeira linha de imagens */}
      <Image 
      src="/imagens/norden-foco-1.png" 
      alt="Imagem 1" 
      width={400}  // Ajuste a largura para a resolução ideal
      height={400} 
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"/>
      <Image 
      src="/imagens/norden-2.png"
      alt="Imagem 2"
      width={400}  // Ajuste a largura para a resolução ideal
      height={400}  
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/norden-3.png" 
      alt="Imagem 3" 
      width={400}  // Ajuste a largura para a resolução ideal
      height={400} 
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/norden-foco-4.png" 
      alt="Imagem 4" 
      width={400}  // Ajuste a largura para a resolução ideal
      height={400} 
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      
      {/* Segunda linha de imagens */}
      <Image 
      src="/imagens/norden-foco-5.png"  
      alt="image" 
      width={400}  // Ajuste a largura para a resolução ideal
      height={400} 
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/norden-6.png" 
      alt="image" 
      width={400}  // Ajuste a largura para a resolução ideal
      height={400} 
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/norden-7.png" 
      alt="image" 
      width={400}  // Ajuste a largura para a resolução ideal
      height={400} 
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
      <Image 
      src="/imagens/norden-foco-8.png" 
      alt="image" 
      width={400}  // Ajuste a largura para a resolução ideal
      height={400} 
      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
    </div>
   </div>
  </section>
  {/* Seção 7 - descrição do prédio  */}
  <div className="relative w-full h-screen">
      <Image
        src="/imagens/section7.png" // Substitua pela URL correta da imagem
        alt="Imagem do empreendimento"
        layout="intrinsic"  // Alterado para intrinsic
        width={970}  // Ajuste a largura para a resolução ideal
        height={1000}  // Ajuste a altura para a resolução ideal
        objectFit="cover" // A imagem se ajustará sem cortar, cobrindo toda a tela
        className="z-0 opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-orange-800 to-transparent"></div>
      <div className="absolute right-28 top-1/4 text-white max-w-md text-3xl">
        <ul className="space-y-6">
          <li className="flex items-center gap-4">
            <BedDouble className="w-10 h-10" /> 10 e 11 andares totais;<br></br>
            9 e 10 andares residenciais;
          </li>
          <li className="flex items-center gap-4">
            <Bed className="w-10 h-10" /> 2 dormitórios sendo 1 suite
          </li>
          <li className="flex items-center gap-4">
            <Flame className="w-10 h-10" /> Sacada com churrasqueira
          </li>
        </ul>   
        <div className="ml-5">
          <a
            href="https://wa.me/5547996984421"
            target="_blank"
            rel="noopener noreferrer">
              <button className="mt-8 bg-orange-400 text-white py-3 px-6 rounded-full text-3xl shadow-lg hover:bg-orange-4000 border border-white"> Quero + Informações!</button>
          </a>
        </div>
     </div>
  </div>
{/* Seção 8 - final */}
<section className="w-full min-h-screen bg-gradient-to-r from-orange-400 via-orange-600 to-black">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-10">
    
    {/* Texto à esquerda */}
    <div className="md:w-1/2 text-left text-white flex flex-col justify-center mt-8 md:mt-0">
      <h1 className="text-4xl md:text-5xl font-semibold leading-relaxed mb-8 font-montserrat">
        Agora que você já conhece nossos Home Clubs, <br />
        que tal conversar comigo e <br /> ter mais informações?
      </h1>

      {/* Botão alinhado com o texto */}
      <a
        href="https://wa.me/5547996984421"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="text-white font-montserrat py-2 px-10 rounded-full text-4xl border-2 border-white bg-black shadow-inner hover:bg-orange-200 hover:text-black transition duration-400 ">
          Saiba Mais!
        </button>
      </a>
    </div>

    {/* Imagem à direita */}
    <div className="relative mt-8">
      <Image
        src="/imagens/imagem teste.png"
        alt="Prédios"
        layout="intrinsic"
        width={700}
        height={300}
        objectFit="cover"
        className="rounded-md"
      />
    </div>
  </div>
</section>




    </>
  );
}
