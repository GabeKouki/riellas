
import "./App.css";

import Menu from "./routes/Menu";
import Home from "./routes/Home";
import Header from "./shared/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderProvider } from './context/HeaderContext'


function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu/:menu" element={<Menu />} />
          </Routes>
        </HeaderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
