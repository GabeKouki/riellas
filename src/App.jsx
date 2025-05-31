import "./App.css";

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
          </Routes>
        </HeaderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
