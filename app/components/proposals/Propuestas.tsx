import React from "react";
import styles from "./propuestas.module.css";
import { BsPeople, BsBook, BsAlarm, BsArrowRight } from "react-icons/bs";

interface Card {
  icon: React.ElementType;
  titulo: string;
  descripcion: string;
  lista?: { titulo: string; texto: string }[];
}

const Propuestas: React.FC = () => {
  const cards: Card[] = [
    {
      icon: BsAlarm,
      titulo: "Turnos",
      descripcion: "Nos dividimos en tres turnos:",

      lista: [
        { titulo: "Turno mañana:", texto: "desde 3er hasta 5to año." },
        { titulo: "Turno tarde:", texto: "para 1er y 2do año." },
        {
          titulo: "Turno vespertino:",
          texto: "disponible para cualquier año.",
        },
      ],
    },
    {
      icon: BsBook,
      titulo: "Modalidades",
      descripcion:
        "Ofrecemos modalidades en Comunicación, Ciencias Sociales y Ciencias Naturales, además de Humanidades en horario nocturno. A partir de 3er año.",
    },
    {
      icon: BsPeople,
      titulo: "Equipos de Trabajo",
      descripcion:
        "Contamos con un equipo de profesionales capacitados, comprometidos en brindar la mejor experiencia educativa a nuestros estudiantes.",
    },
  ];

  return (
    <section className={styles.propuestas} id="propuestas">
      <div className={styles.proContainer}>
        <h1 className={styles.titulo}>Propuestas Académicas</h1>

        {cards.map((x, index) => (
          <div key={index}  className={styles.card}>
            <div className={styles.icon}>
              <x.icon />
            </div>

            <h1>{x.titulo}</h1>
            <p>{x.descripcion}</p>
            {x.lista && (
              <ul>
                {x.lista.map((item, i)=>(
                  <li key={i}>
                  <strong>{item.titulo}</strong> {item.texto}
                </li>
                ))}
            </ul>
            )}

            <a href="">
              Saber Mas
              <BsArrowRight />
            </a>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Propuestas;
