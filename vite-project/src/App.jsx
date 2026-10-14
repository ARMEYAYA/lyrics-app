import { Route, Routes } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import AddSongPage from './pages/AddSongPage'

import './App.css'


function App() {

  return (
 <>
 <Routes>
  <Route path='/' element={<LoginPage/>}/>
  <Route path='/home' element={<HomePage/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/addsong' element={<AddSongPage/>}></Route>
 </Routes>
 </>
  )
}

export default App
