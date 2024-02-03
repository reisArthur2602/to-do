import styled from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";



const Container = styled.div`
  max-width: 80.3125rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-inline: 2rem;
`;


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
