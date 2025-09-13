"use client";

import { useState } from "react";
import { Answer } from "./Answers";
import styles from "./index.module.css";
import data from "@/app/data/repuestas.json";
import {
  LuFileText,
  LuClipboardCheck,
  LuBookOpenCheck,
} from "react-icons/lu";

type Category = keyof typeof data;

const categoryIcons: Record<Category, React.ReactNode> = {
  Reglamento: <LuFileText />,
  InscripcionesPases: <LuClipboardCheck />,
  MateriaDeudadas: <LuBookOpenCheck />,
};

const categoryTitles: Record<Category, string> = {
  Reglamento: "Reglamentos y Sanciones",
  InscripcionesPases: "Inscripciones y Pases",
  MateriaDeudadas: "Materia Adeudar",
};

const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Reglamento");

  const handleCategoryChange = (category: Category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
    }
  };

  return (
    <section className={styles.faq} id="pregunta">

      <h1 className="titulo">Preguntas frecuentes</h1>

      <div className={styles.categorias}>
        {(Object.keys(data) as Category[]).map((category) => (
          <div
            key={category}
            className={`${styles.filterItem} ${selectedCategory === category ? styles.activeFilter : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {categoryIcons[category]}
            <p>{categoryTitles[category]}</p>
          </div>
        ))}
      </div>

      {/* Usamos key en el div para forzar el desmontaje y cierre de los <details> */}
      <div className={styles.respuestas} key={selectedCategory}>
        {data[selectedCategory].map((item, index) => (
          <Answer key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
