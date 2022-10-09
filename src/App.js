import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./COMPONENTS/About";
import Account from "./COMPONENTS/Account";
import Cart from "./COMPONENTS/Cart";
import Checkout from "./COMPONENTS/Checkout";
import ContactUs from "./COMPONENTS/ContactUs";
import Footer from "./COMPONENTS/Footer";
import LandingPage from "./COMPONENTS/LandingPage";
import Login from "./COMPONENTS/Login";
import Navbar from "./COMPONENTS/Navbar";
import Product from "./COMPONENTS/Product";
import Wishlist from "./COMPONENTS/Wishlist";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/Navbar" element={<Navbar/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Checkout" element={<Checkout/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<ContactUs/>}></Route>
        <Route path="/Footer" element={<Footer/>}></Route>
        <Route path="/Account" element={<Account/>}></Route>
        <Route path="/Wishlist" element={<Wishlist/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
     </BrowserRouter>
  );
}

export default App;
