import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Contact from './components/contact/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Pagenotfound from './components/pagenotfound/Pagenotfound';
import Battery from './components/battery/Battery';
import Inverter from './components/inverter/Inverter';
import Cart from './components/cart/Cart';
import "bootstrap-icons/font/bootstrap-icons.css";
import Automotive from './components/automotive/Automotive';
import Preview from './components/preview/Preview';
import Ipreview from './components/preview/Ipreview';
import Apreview from './components/preview/Apreview';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/battery' element={<Battery/>}/>
          <Route path='/inverter' element={<Inverter/>}/>
          <Route path='/automotive' element={<Automotive/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/preview/:id' element={<Preview/>}/>
          <Route path='/Ipreview/:id' element={<Ipreview/>}/>
          <Route path='/Apreview/:id' element={<Apreview/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
