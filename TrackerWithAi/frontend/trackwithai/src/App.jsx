import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import FoodForm from './pages/foodForm'
import Register from './pages/register'
import Landing from './pages/landing'
import './App.css'

function App() {


  return (
    <div>
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/foodentry' element={<FoodForm />} />
          <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
