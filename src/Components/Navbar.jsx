import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'; 
import { useCart } from 'react-use-cart';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex justify-between p-3 text-white' style={{backgroundColor:"#3B1C32"}}>
      <Link to="/">
      <div className='text-2xl md:text-3xl font-bold tracking-wide flex justify-center items-center gap-3' onClick={()=>navigate("/")}>
        <img src="../src/Components/img/shopping-cart.png" alt="logo" width="50px" height="50px" />
        <h1>FreshCart</h1>
      </div>
      </Link>
      

      <div className='lg:hidden flex items-center'>
        <button onClick={toggleMenu}>
          <HiMenu className='text-white text-3xl' />
        </button>
      </div>

      <div className='hidden lg:flex gap-4 flex justify-center items-center'>
        <div className='group relative'>
          <Link to="/">
          <h1 className='text-xl p-1 cursor-pointer'>
            Home
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          </h1>
          </Link>
          
        </div>
        <div className='group relative cursor-pointer'>
          <Link to="/fruits">
          <h2 className='text-xl p-1'>
            Fruits
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          </h2>
          </Link>
        </div>
        <div className='group relative cursor-pointer'>
          <Link to="/vegtables">
          <h2 className='text-xl p-1'>
            Vegtables
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          </h2>
          </Link>
        </div>
        <div className='group relative cursor-pointer'>
          <Link to="/carts">
          <h2 className='text-xl p-1 '>
            <div className='flex flex-row justify-center items-center'>
            <img src="../src/Components/img/basket.png" alt="basket" width="40px" height="50px" />
            <div className='flex justify-center items-center '>
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
            <span className='text-pink-900 px-2 mx-2 bg-white rounded-full text-xl'>{totalItems}</span>
            </div>
            
            </div>
            
          </h2>
          </Link>
        </div>
        
        
        
      </div>

      {isOpen && (
  <div className='lg:hidden absolute top-16 left-0 w-full border border-b-white text-white p-3 pt-2 z-10'  style={{backgroundColor:"#3B1C32"}}>
    <Link to="/" >
      <h1 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>Home</h1>
    </Link>
    <Link to="/fruits">
      <h2 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>Fruits</h2>
    </Link>
    <Link to="/vegtables">
      <h2 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>Vegtables</h2>
    </Link>
    {/* <Link to="/carts">
      <h2 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>Cart
      <span className='text-pink-900 px-2 mx-2 bg-white rounded-full text-xl'>{totalItems}</span>
      </h2>
    </Link> */}
    <Link to="/carts">
    <h2 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>
            <div className='flex flex-row '>
            <img src="../src/Components/img/basket.png" alt="basket" width="30px" height="30px" />
            <div className='flex justify-center items-center '>
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
            <span className='text-pink-900 px-2 mx-2 bg-white rounded-full text-xl'>{totalItems}</span>
            </div>
            </div> 
    </h2>
    </Link>
    
  </div>
)}

    </div>
  );
};

export default NavBar;



