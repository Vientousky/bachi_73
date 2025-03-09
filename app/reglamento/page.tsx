"use client";

import { useState } from "react";
import {
  BsBook,
  BsPerson,
  BsPeople,
  BsBackpack,
  BsJournalBookmarkFill,
} from "react-icons/bs";
import styles from "./reglamento.module.css";
import data from "@/app/data/rule.json";

type Categoria = {
  icon: React.ElementType;
  text: string;
  key: keyof typeof data;
};

type AcuerdoData = {
  title: string;
  intro: string;
  description: string;
  text: string;
  list: string[];
};

type ListaData = {
  title: string;
  list: string[];
};

type NormativaSection = {
  title: string;
  description: string;
  cycles?: { year_range: string; cycle: string }[];
  academic_periods?: { period: string; duration: string }[];
  attendance_rules?: string[];
  physical_activity_exemption?: {
    description: string;
    note: string;
  };
  grading?: {
    approved: string;
    failed: string;
  };
  promotion?: {
    full: string;
    partial: string;
  };
  repetition?: string;
};

type NormativaData = {
  title: string;
  sections: NormativaSection[];
};

const categorias: Categoria[] = [
  { icon: BsBook, text: "Acuerdo Escolar ", key: "Acuerdo" },
  { icon: BsPeople, text: "Padres, Madres o Tutor", key: "Padre_Madre_Tutor" },
  { icon: BsPerson, text: "Alumnos", key: "Alumnos" },
  {
    icon: BsBackpack,
    text: "Docentes y Directivos",
    key: "Docentes_Directivos",
  },
  { icon: BsJournalBookmarkFill, text: "Normativas", key: "normativa_vigente" },
];

const renderWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
};

const AcuerdoSection = ({ data }: { data: AcuerdoData }) => (
  <>
    <h2 className={styles.articulosTitulo}>{renderWithBold(data.title)}</h2>
    <strong>{renderWithBold(data.intro)}</strong>
    <p>{renderWithBold(data.description)}</p>

    <h3>{data.text}</h3>

    <ol>
      {data.list.map((item, index) => (
        <li key={index}>{renderWithBold(item)}</li>
      ))}
    </ol>
  </>
);

const NormativaSection = ({ data }: { data: NormativaData }) => (
  < >
    <h2 className={styles.articulosTitulo}>{data.title}</h2>

    <ol>
      {data.sections.map((section, index) => (
        <li key={index} className={styles.seccionContainer}>
          <h3 className={styles.seccionTitulo}>{section.title}</h3>
          <p>{section.description} </p>

          {section.cycles && (
            <table className={styles.tablaContainer}>
              <thead className={styles.tablaRow}>
                <tr>
                  <th className={styles.tablaHeader} scope="col">
                    Años
                  </th>
                  <th className={styles.tablaHeader} scope="col">
                    Ciclo
                  </th>
                </tr>
              </thead>
              <tbody>
                {section.cycles.map((cycle, idx) => (
                  <tr key={idx} className={styles.tablaRow}>
                    <td data-cell="Año" className={styles.tablaCell}>{cycle.year_range}</td>
                    <td data-cell="Ciclos" className={styles.tablaCell}>{cycle.cycle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {section.academic_periods && (
            <table className={styles.tablaContainer}>
              <thead className={styles.tablaRow}>
                <tr>
                  <th className={styles.tablaHeader} scope="col">
                    Período
                  </th>
                  <th className={styles.tablaHeader} scope="col">
                    Duración
                  </th>
                </tr>
              </thead>
              <tbody>
                {section.academic_periods.map((period, idx) => (
                  <tr key={idx} className={styles.tablaRow}>
                    <td data-cell="Periodo" className={styles.tablaCell}>{period.period}</td>
                    <td data-cell="Duracion" className={styles.tablaCell}>{period.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Renderizar reglas de asistencia si existen */}
          {section.attendance_rules && (
            <ol  className={styles.ol}>
              {section.attendance_rules.map((rule, idx) => (
                <li key={idx} >
                  {renderWithBold(rule)}
                </li>
              ))}
            </ol>
          )}

          {section.physical_activity_exemption && (
            <div>
              <p className={styles.subSeccionItem}>
                {renderWithBold(
                  section.physical_activity_exemption.description
                )}
              </p>

              <p className={styles.subSeccionItem}>
                <strong>Nota:</strong>{" "}
                {section.physical_activity_exemption.note}
              </p>
            </div>
          )}

          {section.grading && (
            <div>
              <strong className={styles.subSeccionTitulo}>Calificación</strong>
              <p className={styles.subSeccionItem}>
                {renderWithBold(section.grading.approved)}
              </p>
              <p className={styles.subSeccionItem}>
                {renderWithBold(section.grading.failed)}
              </p>
            </div>
          )}

          {/* Renderizar promoción si existe */}
          {section.promotion && (
            <div>
              <p>
                <strong className={styles.subSeccionTitulo}>Promoción:</strong>{" "}
                Para promocionar, o pasar año se debe de considerar :
              </p>
              <p className={styles.subSeccionItem}>
                {renderWithBold(section.promotion.full)}
              </p>

              <p className={styles.subSeccionItem}>
                {renderWithBold(section.promotion.partial)}
              </p>
            </div>
          )}

          {/* Renderizar repetición si existe */}
          {section.repetition && (
            <div>
              <strong className={styles.subSeccionTitulo}>Repetición</strong>
              <p className={styles.subSeccionItem}>
                {renderWithBold(section.repetition)}
              </p>
            </div>
          )}
        </li>
      ))}
    </ol>
  </>
);

const ListaSection = ({ data }: { data: ListaData }) => (
  <>
    <h2 className={styles.articulosTitulo}>{renderWithBold(data.title)}</h2>
    <ol>
      {data.list.map((item, index) => (
        <li key={index}>{renderWithBold(item)}</li>
      ))}
    </ol>
  </>
);

const RulePage: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>(
    categorias[0]
  );

  const mitad = Math.ceil(categorias.length / 2);
  const primeraFila = categorias.slice(0, mitad);
  const segundaFila = categorias.slice(mitad);
  const renderContenido = () => {
    const categoriaKey = categoriaActiva.key;
    const categoriaData = data[categoriaKey];

    if (categoriaKey === "Acuerdo") {
      return <AcuerdoSection data={categoriaData as AcuerdoData} />;
    } else if (categoriaKey === "normativa_vigente") {
      return <NormativaSection data={categoriaData as NormativaData} />;
    } else {
      return <ListaSection data={categoriaData as ListaData} />;
    }
  };

  return (
    <main className={styles.reglamento}>
      <h1 className={styles.titulo}>
        Reglamento del Colegio EES N59 del Centenario
      </h1>

      <section className={styles.categoriasContainer}>
        {[primeraFila, segundaFila].map((fila, index) => (
          <article key={index} className={styles.categoriasRow}>
            {fila.map((categoria, idx) => (
              <div
                key={idx}
                className={`${styles.categoriasItem} ${
                  categoriaActiva.key === categoria.key ? styles.activo : ""
                }`}
                onClick={() => setCategoriaActiva(categoria)}
              >
                <p>{categoria.text}</p>
                <categoria.icon aria-label={categoria.text} />
              </div>
            ))}
          </article>
        ))}
      </section>

      <section className={styles.articulos}>{renderContenido()}</section>
    </main>
  );
};

export default RulePage;
