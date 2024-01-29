import React from "react";
import AppRoutes from "./routes/AppRoutes";

import Header from "./components/Header";
import { Container } from "./components/Container";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </>
  );
};

export default App;
