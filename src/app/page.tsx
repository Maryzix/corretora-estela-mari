import Header from "@/components/header/page";
import Terrasse from "@/components/terrasse/page";
import Terrasse_Details from "@/components/terrasse_details/page";
import Fortaleza from "@/components/fortaleza/page";
import Fortaleza_Details from "@/components/fortaleza_details/page";
import Norden from "@/components/norden/page";
import Norden_Details from "@/components/norden_details/page";
import Info from "@/components/info/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <>
      <Header />
      <Terrasse />
      <Terrasse_Details />
      <Fortaleza />
      <Fortaleza_Details />
      <Norden />
      <Norden_Details />
      <Info />
      <Footer />
    </>
  );
}
