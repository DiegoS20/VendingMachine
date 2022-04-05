import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Index from "./components/Index";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <ToastContainer />
    </main>
  );
}

export default App;
