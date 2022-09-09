import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './hooks/Theme'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { CyclesContextProvider } from './context/CyclesContext'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
