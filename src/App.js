import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/GridHome.css'
import { Footer } from './layout/Footer/Footer';
import { Header } from './layout/Header/Header';
import { Home } from './pages/Home/Home';
import { Error } from './pages/Error/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carta } from './pages/Carta/Carta';
import { Login } from './pages/Login/Login';
import { PedirComida } from './pages/PedirComida/PedirComida'
import { Registrarse } from './pages/Registrarse/Registrarse.jsx';
import { Reservas } from './pages/Reservas/Reservas';
import { Contacto } from './pages/Contacto/Contacto';
import { About } from './pages/About/About';
import { ToDoProd } from './pages/ProductAdmin/ToDoProd';
import { UserAdmin } from './pages/UserAdmin/UserAdmin'
import CartProvider from './components/context/Cart';
import YourCart from './pages/Cart/Cart';
import { AuthProvider } from './components/context/AuthContext';
import { AdminRoute } from './components/guard/AdminRoute';







function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <CartProvider>
            <div className="main-container">
              <Header />
              <Routes>
                <Route path='*' element={<Error />} />
                <Route path='/' element={<Home />} />
                <Route path='/registro' element={<Registrarse />} />
                <Route path='/login' element={<Login />} />
                <Route path='/pedir' element={<PedirComida />} />
                <Route path='/carta' element={<Carta />} />
                <Route path='/reservas' element={<Reservas />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/about' element={<About />} />
                <Route path="/productadmin" element={<AdminRoute><ToDoProd /> </AdminRoute>} />
                <Route path='/useradmin' element={<AdminRoute> <UserAdmin /> </AdminRoute>} />
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
