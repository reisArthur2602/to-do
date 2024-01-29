import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Container from './components/Container'
import Header from './components/Header'

const App = () => {
  return (
    <>
     <Container>
      <Header/>
      <AppRoutes/>
     </Container>
     
    </>
   
  )
}

export default App