"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

interface NavItem {
  title: string;
  url: string;
}

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { title: "Inicio", url: "#heros" },
    { title: "Nosotros", url: "#nosotros" },
    { title: "Propuestas", url: "#propuestas" },
    { title: "Pregunta", url: "#pregunta" },
    { title: "Contacto", url: "#contacto" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Link href="/"> <Image src="/img/logo.webp" alt="EES N59" width={35} height={35} /></Link>
      </figure>

      <nav className={`${styles.navContainer} ${menuOpen ? styles.open : ""}`}>
        {navItems.map((link, index) => {
          const isActive = `#${activeSection}` === link.url;
          return (
            <a
              key={index}
              href={link.url}
              className={isActive ? styles.activeLink : ""}
              onClick={handleLinkClick}
            >
              {link.title}
            </a>
          );
        })}
      </nav>

      <button
        className={`${styles.btn} ${menuOpen ? styles.open : ""}`}
        onClick={handleMenuClick}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
    </header>
  );
};

export default Header;
