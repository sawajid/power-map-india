import React from 'react'
import Simple from './Simple'
import ErrorBound from './ErrorBound'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { PlantTypeProvider } from "./PlantTypeContext"

const App = () => {
  return <PlantTypeProvider>
    <CssBaseline />
    <Container maxWidth="lg">
      <ErrorBound>
        <h4>Power Stations in India (Hydel, Nuclear, Thermal)</h4>
        <Simple />
      </ErrorBound>
    </Container>
  </PlantTypeProvider >
}

export default App