import { BsPerson } from "react-icons/bs";
import styles from "./index.module.css";
import clsx from "clsx";

interface Card {
  title: string;
  description: string;
  clases?: "ml-2" | "ml-3" | "ml-4";
  line?: boolean;
}

export default function Card({ title, description, clases, line }: Card) {
  return (
    <article className={clsx(styles.workesCard, clases && styles[clases] )}>
      {line && (
        <div className={styles.line}>
          <div className={styles.top}></div>
          <div className={styles.buttom}></div>
        </div>
      )}

      <div className={styles.profile}>
        <figure className={styles.img}>
          <BsPerson />
        </figure>

        <div className={styles.info}>
          <h2>{title} </h2>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
