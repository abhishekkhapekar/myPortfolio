import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import {ThemeProvider} from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    // <>
      <ThemeProvider theme={{}}>
      <GlobalStyle></GlobalStyle>  
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      </ThemeProvider>
    // </>
  )
}

export default App
