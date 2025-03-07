
const Proximamente: React.FC = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          textAlign: "center",
          transition: "opacity 1.5s ease-in-out",
        }}
      >
        ¡En desarrollo!
      </h1>

      <p
        style={{
          fontSize: "1.5rem",
          transition: "opacity 2s ease-in-out", 
          marginTop: "1rem", 
        }}
      >
        Muy pronto estará disponible
      </p>
    </div>
  );
};

export default Proximamente;
