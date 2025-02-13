import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import MainPage from './mainPage/mainPage'
import CategoryPage from './categoryPage/categoryPage'
import FavoritePage from './favoritePage/favoritePage'

import MilkCheeseEggs from './categoryPage/categories/milk-cheese-eggs/milk-cheese-eggs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}></Route>
        <Route path={'/catalog'} element={<CategoryPage/>}></Route>
        <Route path={'/about'} element={<CategoryPage/>}></Route>
        <Route path={'/cart'} element={<CategoryPage/>}></Route>
        <Route path={'/contacts'} element={<CategoryPage/>}></Route>
        <Route path={'/favorite'} element={<FavoritePage/>}></Route>
        <Route path={'/item'} element={<CategoryPage/>}></Route>
        <Route path={'/jobs'} element={<CategoryPage/>}></Route>
        <Route path={'/orders'} element={<CategoryPage/>}></Route>
        <Route path={'/orders_table'} element={<CategoryPage/>}></Route>
        <Route path={'/search'} element={<CategoryPage/>}></Route>

        <Route path={'/catalog/milk-cheese-eggs'} element={<MilkCheeseEggs/>}></Route>
        <Route path={'/catalog/bread'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/vegetables'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/frozen-food'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/drinks'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/candy'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/tea-coffee'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/grocery'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/healthy-food'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/for-pets'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/for-babies'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/meat'} element={<CategoryPage/>}></Route>
        <Route path={'/catalog/non-edible'} element={<CategoryPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
