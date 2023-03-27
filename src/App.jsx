import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Pagina404 from "./components/Pag404";
import { IndexLayout } from "./layouts/IndexLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="pagina-no-encontrada" element={<Pagina404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;