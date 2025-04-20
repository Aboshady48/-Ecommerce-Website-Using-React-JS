import React from 'react'
import TopHeader from './Components/Header/TopHeader'
import BottomHeader from './Components/Header/BottomHeader'
import Home from './Pages/Home'
const App = () => {
  return (
    <div>
      <header>
      <TopHeader/>
      <BottomHeader/>
      </header>
      <Home/>
      
    </div>
  )
}

export default App
