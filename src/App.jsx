import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Pagina404 from "./components/Pag404";
import { IndexLayout } from "./layouts/IndexLayout";
import Home from "./pages/Home";
import Politicas from "./pages/Politicas";
import Contacto from "./pages/Contacto";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politicas" element={<Politicas />} />
        </Route>
 
        
        
        <Route path="*" element={<Pagina404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;