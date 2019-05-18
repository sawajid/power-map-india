import React from 'react'
import Simple from './Simple'
import ErrorBound from './ErrorBound'
import Container from 'react-bootstrap/Container'
// import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return <Container>
    <h4>Power Stations in India (Hydel, Nuclear, Thermal)</h4>
    <ErrorBound>
      <Simple />
    </ErrorBound>
  </Container>
}

export default App