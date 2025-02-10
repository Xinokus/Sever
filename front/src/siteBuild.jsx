import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import MainPage from './mainPage/mainPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
