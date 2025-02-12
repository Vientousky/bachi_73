'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './header.module.css';

interface NavItem {
    title: string;
    url: string;
}

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const navItems: NavItem[] = [
        { title: "Inicio", url: "#heros" },
        { title: "Nosotros", url: "#nosotros" },
        { title: "Propuestas", url: "#propuestas" },
        { title: "Pregunta", url: "#pregunta" },
        { title: "Contacto", url: "#contacto" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 }); // Detecta cuando el 50% de la sección es visible

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <header className={styles.header}>
            <article className={styles.logo}>
                <Image src="/img/logo.webp" alt="EES N59" width={35} height={35} />
            </article>

            <nav className={styles.navContainer}>
                {navItems.map((link, index) => {
                    const isActive = `#${activeSection}` === link.url;
                    return (
                        <a
                            key={index}
                            href={link.url}
                            className={isActive ? styles.activeLink : ""}
                        >
                            {link.title}
                        </a>
                    );
                })}
            </nav>
        </header>
    );
};

export default Header;
