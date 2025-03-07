import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsJournalBookmark,
  BsPersonWorkspace,
} from "react-icons/bs";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <article className={`${styles.enlaces} ${styles.link}`}>
          <Link href="/reglamento" target="_parent" rel="noopener noreferrer">
            <BsJournalBookmark />
          </Link>
          <Link href="/equipo-trabajo" target="_parent" rel="noopener noreferrer">
            <BsPersonWorkspace />
          </Link>
        </article>

        <article className={styles.texto}>
          <h1 className={styles.titulo}>E.E.S N°59</h1>
          <span className={styles.subtitulo}>Bachi 72</span>
          <p className={styles.eslogan}>
            Desde 1988 formando estudiantes comprometidos con el futuro
          </p>
        </article>

        <article className={`${styles.enlaces} ${styles.redes}`}>
          <Link
            href="https://www.facebook.com/escueladelcentenarioPRSP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </Link>
        </article>
      </div>

      <div className={styles.config}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} EES N59. casi todos los derechos
          reservados
        </p>
      </div>

    </footer>
  );
};

export default Footer;
