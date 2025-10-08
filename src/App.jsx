import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import PantrySelector from './components/PantrySelector'
import SavedRecipes from './components/SavedRecipes'
import Profile from './components/Profile'
import Ingredients from './components/Ingredients'

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/pantry' element={<PantrySelector/>} />
    <Route path='/ingredients' element={<Ingredients/>} />
      <Route path='/saved' element={<SavedRecipes/>} />
  <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}
