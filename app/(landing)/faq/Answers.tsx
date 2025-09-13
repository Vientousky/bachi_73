import styles from "./index.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";

interface AnswerProps {
  titulo: string;
  descripcion?: string;
  list?: string[];
  requisitos?: string[];
  venta_uniformes?: {
    tiendas: {
      nombre: string;
      direccion: string;
    }[];
  };

}

export const Answer: React.FC<AnswerProps> = ({ titulo, descripcion, list, requisitos, venta_uniformes}) => {
  return (
    <details name="info" className={styles.item}>
      <summary className={styles.question}>
        <p>{titulo}</p>
        <BsChevronDoubleDown />
      </summary>


        <div className={styles.answers}>
           <p>{descripcion}</p>

          {list && (
            <ul className={styles.lista}>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {requisitos && (
            <ul className={styles.lista}>
              {requisitos.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {venta_uniformes && (
            <div className={styles.tiendas}>
              <h4>Venta de uniformes:</h4>
              <ul>
                {venta_uniformes.tiendas.map((tienda, index) => (
                  <li key={index}>
                    {tienda.nombre} - {tienda.direccion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

    </details>
  );
};
