import { useContext } from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import FoodForm from './pages/foodForm';
import Auth from './components/auth';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContext } from './content/UserProvider';
import Navbar from './components/Navbar';

function App() {
  const { token } = useContext(UserContext);
  return (
    <div>
       { token && <Navbar /> }
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/foodentry' element={<ProtectedRoute token={token} redirectTo='/register'><FoodForm /></ProtectedRoute>} />
        <Route path='/register' element={<Auth />} />
        <Route path="/dashboard" element={<ProtectedRoute token={token} redirectTo='/register'><Dashboard /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
