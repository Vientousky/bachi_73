import React from "react";
import styles from './footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.titulo}>EES N59</h1>
      <p className={styles.text}>Desde 1988 formando estudiantes comprometidos con el futuro</p>
      
      <p className={styles.copy}>&copy; {new Date().getFullYear()} EES N59. casi todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
