import { useAIDebugger } from "../hooks/useAiDebugger";

function DebugDemo() {
  const { error, suggestion, debug } = useAIDebugger();

  const triggerError = () => {
    try {
      throw new Error("fetch failed: 404");
    } catch (e) {
      debug(e.message);
    }
  };

  return (
    <div>
      <h2>AI Debugging Demo</h2>
      <button onClick={triggerError}>Trigger Error</button>

      {error && (
        <div style={{ marginTop: "10px", color: "red" }}>
          <p>
            <b>Error:</b> {error}
          </p>
          <p>
            <b>AI Suggestion:</b> {suggestion}
          </p>
        </div>
      )}
    </div>
  );
}

export default DebugDemo;
