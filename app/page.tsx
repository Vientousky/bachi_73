import HomeHero from "./components/heros/Heros";
import Nosotros from "./components/about/Nosotros";
import Propuestas from "./components/proposals/Propuestas";
import FAQ from "./components/faq/Faq";

export default function Home() {
  return (
    <main>

      <HomeHero/>
      <Nosotros/>
      <Propuestas/>
      <FAQ/>
    </main>
  );
}
