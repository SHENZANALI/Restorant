import React from 'react'
import Layout from './components/layout/Layout'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contect from '../src/pages/Contect'
import Meno from '../src/pages/Meno'
import PagesNot from '../src/pages/PagesNot'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contect/>}/>
            <Route path='/menu' element={<Meno/>}/>
            <Route path='*' element={<PagesNot/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App