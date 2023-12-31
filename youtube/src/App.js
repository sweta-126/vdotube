import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { darkTheme, lightTheme } from './Utils/Theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Login from './pages/Login'
import Search from './pages/Search'
import Empty from './pages/Empty'

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`;

const App = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random"/>} />
                  <Route path="trends" element={<Home type="trend"/>} />
                  <Route path="subscriptions" element={<Home type="sub"/>} />
                  <Route path="empty" element={<Empty />} />
                  <Route path="search" element={<Search />} />
                  <Route path='login' element={<Login />} />
                  <Route path='video'>
                    <Route path=':id' element={<Video />}/>
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
