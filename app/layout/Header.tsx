"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname} from "next/navigation";

interface NavItem {
  title: string;
  url: string;
}

const navItems: NavItem[] = [
  { title: "Inicio", url: "/#heros" },
  { title: "Nosotros", url: "/#nosotros" },
  { title: "Propuestas", url: "/#propuestas" },
  { title: "Pregunta", url: "/#pregunta" },
  { title: "Contacto", url: "/#contacto" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const updateActiveSection = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      const cleanup = updateActiveSection();
      return cleanup;
    }
  }, [pathname, updateActiveSection]);

  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Link href="/">
          <Image src="/img/logo.webp" alt="EES N59" width={35} height={35} />
        </Link>
      </figure>

      <nav className={`${styles.navContainer} ${menuOpen ? styles.open : ""}`}>
        {navItems.map((link) => {
          const isActive = pathname === "/" && activeSection && link.url.endsWith(`#${activeSection}`);
          return (
            <Link
              key={link.url}
              href={link.url}
              className={isActive ? styles.activeLink : ""}
              onClick={closeMenu}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>

      <button
        className={`${styles.btn} ${menuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
    </header>
  );
};

export default Header;