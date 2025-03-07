"use client";


import { BsSun, BsMoonStars, BsPcDisplay } from "react-icons/bs";
import styles from "./footer.module.css";

const Interrutor: React.FC = () => {

  return (
    <article className={styles.modo}>
      <button>
        <BsSun />
      </button>
      <button>
        <BsMoonStars />
      </button>
      <button>
        <BsPcDisplay />
      </button>
    </article>
  );
};

export default Interrutor;
