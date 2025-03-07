"use client";

import {useRef} from "react";
import styles from "./propuestas.module.css";
import { BsPeople, BsBook, BsAlarm, BsArrowRight } from "react-icons/bs";

interface Card {
  icon: React.ElementType;
  titulo: string;
  descripcion: string;
  lista?: { titulo: string; texto: string }[];
  url?: string;
}

const Propuestas: React.FC = () => {

  const modalRef = useRef<HTMLDialogElement>(null);

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
      url: "/equipo-trabajo",
      descripcion:
        "Contamos con un equipo de profesionales capacitados, comprometidos en brindar la mejor experiencia educativa a nuestros estudiantes.",
    },
  ];

  const abrilModal = () => {
    modalRef.current?.showModal();
  };

  const cerrarModalSiClicFuera = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === modalRef.current) {
      modalRef.current?.close();
    }
  };

  return (
    <section className={styles.propuestas} id="propuestas">
      <h1 className="titulo">Propuestas Académicas</h1>

      <div className={styles.container}>
        {cards.map((x, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
              <x.icon />
            </div>

            <h1>{x.titulo}</h1>
            <p>{x.descripcion}</p>
            {x.lista && (
              <ul>
                {x.lista.map((item, i) => (
                  <li key={i}>
                    <strong>{item.titulo}</strong> {item.texto}
                  </li>
                ))}
              </ul>
            )}

            {index === 0 && (
              <a onClick={abrilModal}>
                Saber Mas
                <BsArrowRight />
              </a>
            )}

            {index === 2 && (
              <a href={x.url} >
                Saber Mas
                <BsArrowRight />
              </a>
            )}
          </div>
        ))}
      </div>

      <dialog ref={modalRef} className={styles.modal} onClick={cerrarModalSiClicFuera}>
        <div className={styles.modalContent}>

          <h1>Estamos Analizando La Mejor Solución</h1>

          <button onClick={() => modalRef.current?.close()}>OK</button>
        </div>
      </dialog>
    </section>
  );
};

export default Propuestas;
