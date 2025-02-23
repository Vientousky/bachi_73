import React from "react";
import Image from "next/image";
import styles from "./nosotros.module.css";

const Nosotros: React.FC = () => {

  return (
    <section className={styles.about} id="nosotros">
      <div className={styles.aboutImg}>
        <div className={styles.item}>
          <Image src="/img/veteranos.webp" alt="expocicion" width={300} height={500} />
        </div>

        <div className={styles.item2}>
          <Image src="/img/fraces.webp" alt="expocicion" width={500} height={300} />
        </div>

        <div className={styles.item3}>
          <Image src="/img/abanderado.webp" alt="expocicion" width={500} height={300} />
        </div>

        <div className={styles.item4}>
          <Image src="/img/expo.webp" alt="expocicion" width={300} height={500}/>
        </div>
      </div>

      <div className={styles.aboutInfo}>
        <h1 className="" >Nosotros</h1>

        <h2>
          E.E.S N°59 Conocido como <strong className={styles.strong}>Bachi 72</strong>
        </h2>

        <p>
          Nació en 1988, inicialmente funcionando en el Colegio
          EEP N°990 en el turno noche. Años después, gracias al apoyo de la
          comunidad, se trasladó al edificio del exmercado municipal, ubicado en
          el 713 viviendas. Al principio fue difícil, pero con el esfuerzo de la
          comunidad, el colegio fue creciendo y se convirtió en lo que es hoy en día
        </p>
      </div>
    </section>
  );
};

export default Nosotros;
