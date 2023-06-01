import './App.css'
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './Utility/GlobalStyles/theme'

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
          <Home />
    </ThemeProvider >
  )
}

export default App
