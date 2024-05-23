import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/pages/Home/Home';
import Provider from './Components/Context/Provider';
import Cart from './Components/Cart/Cart';
import { useContext } from 'react';
import { AppContext } from './Components/Context/AppContext';
import NotFoundError from './Components/ErrorComponents/NotFoundError';





function App() {



  return (
    <Provider>
    <Router>
      <Navbar/>  
      <Cart/>
    <Routes>

            <Route path='/' element={<Home />} />

    </Routes>
    </Router>
    </Provider>
  )
}

export default App
