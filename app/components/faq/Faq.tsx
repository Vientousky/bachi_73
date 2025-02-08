import React from "react";
import styles from "./index.module.css";
import {
  LuFileText,
  LuCalendarClock,
  LuClipboardCheck,
  LuBookOpenCheck,
} from "react-icons/lu";

const FAQ: React.FC = () => {
  return (
    <section className={styles.faq}>
      <h1>Preguntas Frecuentes</h1>

      <div className={styles.categoria}>
        <div className={`${styles.filtro} ${styles.activado}`}>
          <LuFileText />

          <p>Reglamentos y Sanciones</p>
        </div>

        <div className={styles.filtro}>
          <LuCalendarClock />
          <p>Horarios y Turnos</p>
        </div>

        <div className={styles.filtro}>
          <LuClipboardCheck />
          <p>Inscripciones y Pases</p>
        </div>

        <div className={styles.filtro}>
          <LuBookOpenCheck />
          <p>Materia Adeudar</p>
        </div>
      </div>

      <div>
        <details className={styles.details}>
          <summary className={styles.summary}>¿Cuál es el código de vestimenta?</summary>
          <p>El código de vestimenta es el siguiente:</p>
          <ul>
            <li>Remera blanca (sin estampados ni logos grandes).</li>
            <li>Jeans sin roturas, en color negro o azul.</li>
            <li>No se permite el uso de piercings visibles.</li>
            <li>No se permite el uso de maquillaje.</li>
          </ul>
        </details>

        <details className={styles.details}>
          <summary className={styles.summary}>¿Cómo se sancionan las conductas?</summary>
          <p>Las sanciones se aplican mediante Actas o Amonestaciones:</p>
          <ul>
            <li>Una Acta: Advertencia.</li>
            <li>Dos Actas: Llamado a los padres.</li>
            <li>
              Tres Actas: Expulsión con pase a otro colegio o cambio al turno
              noche, dependiendo de la evaluación disciplinaria.
            </li>
          </ul>
        </details>

        <details className={styles.details}>
          <summary className={styles.summary}>Faltas e Inasistencias</summary>
          <p>
            El límite de faltas permitido es de <strong>30</strong>. Al superar
            este límite, el estudiante podrá:
          </p>
          <ul>
            <li>
              Justificar inasistencias con documentación válida y obtener{" "}
              <strong>5 asistencias adicionales</strong>.
            </li>
            <li>
              Recuperar clases en casos excepcionales según criterio de la
              institución.
            </li>
            <li>
              Repetir el año si las faltas son excesivas y no justificadas.
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
