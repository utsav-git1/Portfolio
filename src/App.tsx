import './App.css'
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './Utility/GlobalStyles/theme'
import { useState } from 'react'

function App() {

  const [style,setStyle] = useState(darkTheme)

  const toggleTheme = () => {
    setStyle(style == darkTheme ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
          <Home toggleTheme={toggleTheme} />
    </ThemeProvider >
  )
}

export default App
