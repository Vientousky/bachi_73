import React from "react";
import styles from "./contact.module.css";
import { BsTelephone, BsEnvelopeAt, BsGeoAlt } from "react-icons/bs";

type Turno = 'Mañana' | 'Tarde' | 'Vespertino';

type Horario = {
  turno: Turno;
  horario: string;
  directivo: string;
};

const Contact: React.FC = () => {

  const horarios: Horario[] = [
    {
      turno: 'Mañana',
      horario: '7:15 AM - 11:00 PM',
      directivo: 'Directora: Fagunde Maria ',
    },
    {
      turno: 'Tarde',
      horario: '1:10 PM - 4:00 PM',
      directivo: 'ViceDirector: Dino Campañola',
    },
    {
      turno: 'Vespertino',
      horario: '5:30 PM - 8:00 PM',
      directivo: 'ViceDirectora: Blaho Andre',
    },
  ];

  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <article className={styles.infoBody}>
          <div className={styles.card}>
            <h1>
              <BsTelephone />
              Numero
            </h1>
            <p>3644 **** **</p>
          </div>

          <div className={styles.card}>
            <h1>
              <BsEnvelopeAt />
              Correo
            </h1>
            <p>EJemplo@gmail.com</p>
          </div>

          <div className={`${styles.card} ${styles.ubi}`}>
            <h1>
              <BsGeoAlt />
              Ubicacion
            </h1>
            <p>Mz 140 Pc 4 Barrio 713 viviendas, Saenz Peña Chaco</p>
          </div>
        </article>

        <h1 className={styles.info} >Horario de Anteción al Publico</h1>

        <article className={styles.container}>
          <table className={styles.table}>

            <thead className={styles.thead}>
              <tr>
                <th>Turnos</th>
                <th>Horarios</th>
                <th>Responsable</th>
              </tr>
            </thead>

            <tbody className={styles.tbody}>
              {horarios.map((x, index)=> (
                 <tr key={index}>
                 <td data-cell='Turnos' >{x.turno}</td>
                 <td data-cell='Horarios' >{x.horario}</td>
                 <td data-cell='Responsable' >{x.directivo}</td>
               </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.777418185102!2d-60.41746375947401!3d-26.790456598180413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94412d40dc3a8151%3A0xbaf45023ea3b3301!2sE.E.S%20N*2A%2059!5e0!3m2!1ses!2sar!4v1728575217772!5m2!1ses!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
