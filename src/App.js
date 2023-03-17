import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/GridHome.css'
import { Footer } from './layout/Footer/Footer';
import { Header } from './layout/Header/Header';
import { Home } from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carta } from './pages/Carta/Carta';
import { Login } from './pages/Login/Login';
import { PedirComida } from './pages/PedirComida/PedirComida'
import { Registrarse } from './pages/Registrarse/Registrarse.jsx';
import { Reservas } from './pages/Reservas/Reservas';
import { Contacto } from './pages/Contacto/Contacto';
import { About } from './pages/About/About';
import { ToDoProd } from './pages/Ad/ToDoProd';
import CartProvider from './components/context/Cart';
import YourCart from './pages/Cart/Cart';
import { AuthProvider } from './components/context/AuthContext';







function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <CartProvider>
            <div className="main-container">
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registro' element={<Registrarse />} />
                <Route path='/login' element={<Login />} />
                <Route path='/pedir' element={<PedirComida />} />
                <Route path='/carta' element={<Carta />} />
                <Route path='/reservas' element={<Reservas />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/about' element={<About />} />
                <Route path="/todoproduct" element={<ToDoProd />} />
                <Route path='/your-cart' element={<YourCart />} />
              </Routes>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
