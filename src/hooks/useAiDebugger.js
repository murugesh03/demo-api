import { useState } from "react";

export function useAIDebugger() {
  const [error, setError] = useState(null);
  const [suggestion, setSuggestion] = useState(null);

  const debug = (err) => {
    setError(err);

    // Mock AI Suggestions (hardcoded logic)
    if (err.includes("fetch")) {
      setSuggestion("Check the API URL or network connection.");
    } else if (err.includes("undefined")) {
      setSuggestion("Make sure all variables are initialized properly.");
    } else {
      setSuggestion("Check console logs for more details.");
    }
  };

  return { error, suggestion, debug };
}
