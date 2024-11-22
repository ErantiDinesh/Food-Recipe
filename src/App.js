import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Categories from './components/Categories/Categories'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cuisine from './components/Cuisine/Cuisine'
import RecipePage from './components/RecipePage/RecipePage'
import SearchedProducts from './components/SearchedProducts/SearchedProducts'
import Favourites from './components/Favourites/Favourites'
import OnlineItems from './components/OnlineItems/OnlineItems'
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <div className='app-container'>

      <BrowserRouter>
      <Categories/>
      {/* <FetchData/> */}
      <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/cuisine/:type" element = {<Cuisine/>} />
        <Route exact path = "/recipe/:id" element = {<RecipePage/>} />
        <Route exact path = "/searched/:name" element = {<SearchedProducts />} />
        <Route exact path = "/cuisine/favourites" element = {<Favourites/>} />
        <Route exact path = "/order/online" element = {<OnlineItems/>} />
        <Route exact path = "/cart" element = {<Cart/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
