import React from "react";
import styles from "./home.module.css";

const HomeHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>¡Bievenido a la ESS N59!</h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          accusantium quos voluptas optio saepe quidem ea facere consequuntur
        </p>

        <div>
          <a href="">Aqui tambien</a>

          <button>Aqui ira algo</button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
