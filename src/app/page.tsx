import Header from "@/components/header";
import Hero from "@/components/hero";
import Servicios from "@/components/servicios";
import Proyectos from "@/components/proyectos";
import Filosofia from "@/components/filosofia";
import Clientes from "@/components/clientes";
import Proceso from "@/components/proceso";
import Estudio from "@/components/estudio";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Servicios />
      <Proyectos />
      <Proceso />
      <Clientes />
      <Filosofia />
      <Estudio />
      <Contacto />
      <Footer />
    </div>
  );
}
