import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import CategoryPage from "../Pages/CategoryPage"

const Allrouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
    </div>
  )
}

export default Allrouters