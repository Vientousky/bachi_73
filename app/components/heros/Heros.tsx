import React from "react";
import styles from "./home.module.css";

const HomeHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>
          ¡Bievenido a la{" "}
          <strong className="text-gradient">ESS N59!</strong>
        </h1>

        <p>
          En esta institución, tanto usted como sus hijos tendrán la oportunidad
          de adquirir un amplio abanico de conocimientos.
        </p>

        <div className={styles.btn}>
          <a href="">Ver Reglamento</a>

          <a href="">Saber mas</a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
