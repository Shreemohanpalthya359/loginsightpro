import { useState } from "react";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      {!showDashboard ? (
        <Landing onStart={() => setShowDashboard(true)} />
      ) : (
        <Dashboard onBack={() => setShowDashboard(false)} />
      )}
    </>
  );
}

export default App;