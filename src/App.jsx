import { useState } from "react";
import ApiDemo from "./ApiDemo";
import DebugDemo from "./DebugDemo";

function App() {
  const [tab, setTab] = useState("api");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Full Stack Trainer Demo</h1>

      {/* Tab Navigation */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setTab("api")} style={{ marginRight: "10px" }}>
          API Integration
        </button>
        <button onClick={() => setTab("debug")}>AI Debugging</button>
      </div>

      {/* Tab Content */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px"
        }}
      >
        {tab === "api" ? <ApiDemo /> : <DebugDemo />}
      </div>
    </div>
  );
}

export default App;
