import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Pestañas */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("tab1")}
          style={{
            padding: "10px 20px",
            border: "none",
            borderBottom: activeTab === "tab1" ? "3px solid blue" : "1px solid gray",
            background: "transparent",
            cursor: "pointer"
          }}
        >
          Pestaña 1
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          style={{
            padding: "10px 20px",
            border: "none",
            borderBottom: activeTab === "tab2" ? "3px solid blue" : "1px solid gray",
            background: "transparent",
            cursor: "pointer"
          }}
        >
          Pestaña 2
        </button>
        <button
          onClick={() => setActiveTab("tab3")}
          style={{
            padding: "10px 20px",
            border: "none",
            borderBottom: activeTab === "tab3" ? "3px solid blue" : "1px solid gray",
            background: "transparent",
            cursor: "pointer"
          }}
        >
          Pestaña 3
        </button>
      </div>

      {/* Contenido */}
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        {activeTab === "tab1" && <p>Contenido de la Pestaña 1</p>}
        {activeTab === "tab2" && <p>Contenido de la Pestaña 2</p>}
        {activeTab === "tab3" && <p>Contenido de la Pestaña 3</p>}
      </div>
    </div>
  );
}

export default App;
