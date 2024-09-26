import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProgrammingPage from "./pages/ProgrammingPage";
import PhotographyPage from "./pages/PhotographyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
      </Routes>
    </BrowserRouter >
  );
}
