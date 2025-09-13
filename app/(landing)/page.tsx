import HomeHero from "./heros/Heros";
import Nosotros from "./about/Nosotros";
import Propuestas from "./proposals/Propuestas";
import FAQ from "./faq/Faq";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Nosotros />
      <Propuestas />
      <FAQ />
      <Contact />
    </main>
  );
}
