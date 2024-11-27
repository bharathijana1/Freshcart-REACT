import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';  // Import CartProvider to wrap the app
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Fruits from './Components/Fruits';
import Vegtables from './Components/Vegtables';
import Footer from './Components/Footer';
import Carts from './Components/Carts';
import PageNotFound from './Components/PageNotFound';
import BuyNow from './Components/BuyNow';
import PersonlaDetails from './Components/PersonlaDetails';
import PaymentPage from './Components/PaymentPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <CartProvider> 
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/vegtables" element={<Vegtables />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/buynow" element={<BuyNow />} />
            <Route path="/personaldetails" element={<PersonlaDetails />} />
            <Route path="/paymentdetails" element={<PaymentPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
