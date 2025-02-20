import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import MainPage from './mainPage/mainPage'
import CategoryPage from './categoryPage/categoryPage'
import FavoritePage from './favoritePage/favoritePage'
import CartPage from './cartPage/cartPage'
import JobsPage from './jobsPage/jobsPage'
import AboutPage from './aboutPage/aboutPage'
import ContactsPage from './contactsPage/contactsPage'
import OrdersPage from './ordersPage/ordersPage'
import ResultsPage from './resultsPage/resultsPage'
import AdminOrdersPage from './ordersTablePage/ordersTablePage'

import MilkCheeseEggs from './categoryPage/categories/milk-cheese-eggs/milk-cheese-eggs'
import Bread from './categoryPage/categories/bread/bread'
import FruitsAndVegetables from './categoryPage/categories/fruits-and-vegetables/fruits-and-vegetables'
import FrozenFood from './categoryPage/categories/frozen-food/frozen-food'
import Drinks from './categoryPage/categories/drinks/drinks'
import Candy from './categoryPage/categories/candy/candy'
import TeaCoffee from './categoryPage/categories/tea-coffee/tea-coffee'
import Grocery from './categoryPage/categories/grocery/grocery'
import HealthyFood from './categoryPage/categories/healthy-food/healthy-food'
import ForPets from './categoryPage/categories/for-pets/for-pets'
import ForBabies from './categoryPage/categories/for-babies/for-babies'
import Meat from './categoryPage/categories/meat/meat'
import NonEdible from './categoryPage/categories/non-edible/non-edible'

import ItemPage from './itemPage/itemPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}></Route>
        <Route path={'/catalog'} element={<CategoryPage/>}></Route>
        <Route path={'/about'} element={<AboutPage/>}></Route>
        <Route path={'/cart'} element={<CartPage/>}></Route>
        <Route path={'/contacts'} element={<ContactsPage/>}></Route>
        <Route path={'/favorite'} element={<FavoritePage/>}></Route>
        <Route path={'/item'} element={<ItemPage/>}></Route>
        <Route path={'/jobs'} element={<JobsPage/>}></Route>
        <Route path={'/orders'} element={<OrdersPage/>}></Route>
        <Route path={'/search'} element={<CategoryPage/>}></Route>
        <Route path={'/results'} element={<ResultsPage/>}></Route>
        <Route path={'/admin-orders'} element={<AdminOrdersPage/>}></Route>

        <Route path={'/catalog/milk-cheese-eggs'} element={<MilkCheeseEggs/>}></Route>
        <Route path={'/catalog/bread'} element={<Bread/>}></Route>
        <Route path={'/catalog/fruits-and-vegetables'} element={<FruitsAndVegetables/>}></Route>
        <Route path={'/catalog/frozen-food'} element={<FrozenFood/>}></Route>
        <Route path={'/catalog/drinks'} element={<Drinks/>}></Route>
        <Route path={'/catalog/candy'} element={<Candy/>}></Route>
        <Route path={'/catalog/tea-coffee'} element={<TeaCoffee/>}></Route>
        <Route path={'/catalog/grocery'} element={<Grocery/>}></Route>
        <Route path={'/catalog/healthy-food'} element={<HealthyFood/>}></Route>
        <Route path={'/catalog/for-pets'} element={<ForPets/>}></Route>
        <Route path={'/catalog/for-babies'} element={<ForBabies/>}></Route>
        <Route path={'/catalog/meat'} element={<Meat/>}></Route>
        <Route path={'/catalog/non-edible'} element={<NonEdible/>}></Route>

        <Route path='/catalog/milk-cheese-eggs/maslo-prostokvashino' element={<ItemPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
