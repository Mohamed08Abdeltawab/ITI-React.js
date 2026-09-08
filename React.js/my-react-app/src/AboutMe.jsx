export const AboutMe = () => {
  return (
    <div style={{gridTemplateColumns: "150px 1fr", display: "grid", gap: "20px", flexDirection: "column"}}>
      <div>
        <h2
          style={{
            color: "#38393a",
            fontSize: "24px",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          About Me
        </h2>
      </div>
      <div style={{ padding: "20px" }}>
        <p style={{ color: "#38393a", fontSize: "16px", lineHeight: "1.5" }}>
          lore ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor
          sit amet lore ipsum dolor sit amet lore ipsum dolor sit amet lore
          ipsum dolor sit amet lore ipsum dolor sit amet lore ipsum dolor sit
          amet
        </p>
        <button
          style={{
            backgroundColor: "#38393a",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Click Me
        </button>
      </div>

      
    </div>
  );
};
