import React from "react";
import styles from "./home.module.css";
import Link from "next/link";

const HomeHero: React.FC = () => {
  return (
    <>

    <div className={styles.notification}>
      <p>Web no official del colegio EES N59 / Todo la información tomerserla con pinza </p>
    </div>

      <section className={styles.hero} id="heros">
        <div className={styles.container}>
          <h1>
            ¡Bievenido a la <strong className="text-gradient">ESS N59!</strong>
          </h1>

          <p>
            Esta web no es la official de momento. Toda la informacion que esta
            aqui son de mostración
          </p>

          <div className={styles.link}>
            <Link className={styles.ir} href="/reglamento">
              Ver Reglamento
            </Link>

            <a className={styles.donwload} href="">
              Descargar
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
