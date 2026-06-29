import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState(0);
  const [historique, setHistorique] = useState([]);

  function generer() {
    const nouveauNombre = Math.floor(Math.random() * 100) + 1;
    setNombre(nouveauNombre);
    setHistorique([nouveauNombre, ...historique]);
  }

  return (
    <div style={{ background: "#1a1a2e", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px", color: "white" }}>
      <h1>🎲 Générateur de nombres</h1>
      <p style={{ fontSize: "80px", fontWeight: "bold", color: "#6c63ff", margin: "20px" }}>
        {nombre}
      </p>
      <button onClick={generer} style={{ padding: "15px 40px", background: "#6c63ff", color: "white", border: "none", borderRadius: "10px", fontSize: "16px", cursor: "pointer", marginBottom: "30px" }}>
        🎲 Générer !
      </button>
      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "15px", padding: "20px", width: "300px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Historique</h2>
        {historique.length === 0 ? (
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)" }}>Aucun nombre généré</p>
        ) : (
          historique.map((n, index) => (
            <p key={index} style={{ padding: "8px", background: "rgba(108,99,255,0.2)", borderRadius: "8px", marginBottom: "8px", textAlign: "center" }}>
              #{index + 1} — {n}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default App;