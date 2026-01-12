import Card from "./Card";
import styles from "./index.module.css";

export default function page() {
  const hierarchy = [
    {
      title: "Turno Manaña directorar general:",
      description: "Facundes Maria",
    },
    {
      title: "Turno Tarde vicedirectora:",
      description: "Marisa Martinez",
      linea: true,
    },
    {
      title: "Turno Vespertino vicedirector:",
      description: "Dante Balda",
      linea: true,
    },
    {
      title: "Turno Vespertino vicedirector:",
      description: "Dante Balda",
      linea: true,
    },
    {
      title: "Scretaria:",
      description: "Ruiz Dias Mariela",
      linea: true,
    },
  ];

  return (
    <main className={styles.wrapping}>
      <h1>Jerarquia institucional EES N59</h1>

      <section className={styles.hierarchy}>
        {hierarchy.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            line={item.linea}
          />
        ))}
        <Card
          title="Asesora Pedagogica:"
          description="Melanie Solis"
          line
          clases="ml-4"
        />
        <Card
          title="Auxilir docente:"
          description="Dependiendo de que curso este su hijo tendra una auxiliar docente u otra"
          line
          clases="ml-4"
        />
      </section>

      <section>
        <figure></figure>

        <h1></h1>
      </section>
    </main>
  );
}
