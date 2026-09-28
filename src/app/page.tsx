import Header from "@/components/header";
import Ticker from "@/components/ticker";
import Hero from "@/components/hero";
import Servicios from "@/components/servicios";
// La versión anterior sigue en "@/components/proyectos".
import Proyectos from "@/components/proyectos-galeria";
import Filosofia from "@/components/filosofia";
import Clientes from "@/components/clientes";
import Proceso from "@/components/proceso";
import Brief from "@/components/brief";
import Estudio from "@/components/estudio";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Ticker />
      <Hero />
      <Servicios />
      <Proyectos />
      <Proceso />
      <Brief />
      <Clientes />
      <Filosofia />
      <Estudio />
      <Contacto />
      <Footer />
    </div>
  );
}
