import React from "react";
import styles from "./contact.module.css";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>

      <h1 className={styles.titulo} >Contactos</h1>

      <div className={styles.info}>
        <div className={styles.cardbody}>

          <div className={styles.card}>

            <h1>Telefonos</h1>
            <p>3644 566553 , 3644 214587</p>
          </div>

          <div className={styles.card}>

            <h1>Correo</h1>
            <p>correodeejemplo@gmail.com</p>

          </div>

          <div className={styles.card}>

            <h1>Ubicados</h1>
            <p>Mz 140 Pc 4 Barrio 713 viviendas, Saenz Peña Chaco</p>

          </div>

        </div>

        <div>
          <table className={styles.table}>
            <caption className={styles.caption}>Horarios de atencion</caption>
            <thead className={styles.thead}>
              <tr  className={styles.tr}>
                <th className={styles.th}>Turnos</th>
                <th className={styles.th}>Horarios</th>
                <th className={styles.th}>reponsable</th>
              </tr>
            </thead>

            <tbody className={styles.tbody}>
              <tr className={styles.tr}>
                <td className={styles.td}>Mañana</td>
                <td className={styles.td}>8 AM 11:00 PM</td>
                <td className={styles.td}>Directora: Fagunde Maria </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Tarde</td>
                <td className={styles.td}>1:30 a 4:30 PM</td>
                <td className={styles.td}>ViceDirector: Dino Campanola</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Vespertino</td>
                <td className={styles.td}>18 PM 8:30 PM</td>
                <td className={styles.td}>ViceDirectora: Blaho Andre</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.maps}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.777418185102!2d-60.41746375947401!3d-26.790456598180413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94412d40dc3a8151%3A0xbaf45023ea3b3301!2sE.E.S%20N*2A%2059!5e0!3m2!1ses!2sar!4v1728575217772!5m2!1ses!2sar"
          width="300"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
