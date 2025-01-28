import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import SobreMim from "./pages/SobreMim";
import Inicio from "./pages/Inicio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/Particles";

const FundoColorido = styled.div`
  background: rgb(1, 3, 64);
  background: linear-gradient(
    146deg,
    rgba(1, 3, 64, 1) 0%,
    rgba(6, 81, 148, 1) 50%,
    rgba(91, 3, 154, 1) 100%
  );
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  z-index: 1;
`;

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <FundoColorido>
        <ParticlesComponent />
        <Header />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-mim" element={<SobreMim />} />
          </Routes>
        </AppContainer>
        <Footer />
      </FundoColorido>
    </BrowserRouter>
  );
};

export default AppRoutes;
