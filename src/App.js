import { Routes, Route } from "react-router-dom";

import Index from "./components/Index";

import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </main>
  );
}

export default App;
