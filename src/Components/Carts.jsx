import React from 'react';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';

const Carts = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    quantity,
    totalItems,
    totalPrice,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart
  } = useCart();
  const navigate = useNavigate(); 

  if (isEmpty) {
    return (
      <div className="text-center mt-10 h-screen">
        <h2 className="text-2xl font-bold">Your Cart is Empty!</h2>
        <button onClick={() => navigate('/')} className="mt-4 bg-pink-900 text-white text-lg px-6 py-2 rounded">Go to Shop</button>
      </div>
    );
  }

  return (
    <div className="mx-auto p-4 h-screen">
      <h2 className="text-3xl font-bold text-center mb-4">Shopping Cart</h2>

      <div className="flex justify-between md:justify-around flex-wrap mb-4 p-2 text-xl font-medium">
        <span>Cart ({totalUniqueItems}) Total Items: {totalItems}</span>
        <span>Total Price: RS.<strong className='text-2xl'> {cartTotal}</strong></span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-around flex-wrap items-center gap-2 w-full xl:w-3/4 mx-auto shadow-sm shadow-pink-600">
            <div className="flex items-center w-64 xl:w-1/2 p-1 px-3">
              <img src={item.productimg} alt={item.productalt} width="100px" height="100px" className='w-32 h-32 ' />
              <div className="ml-4">
                <h3 className="text-xl font-bold capitalize">{item.productname}</h3>
                <p>RS. {item.price}</p>
                <p>Quantity ({item.quantity})</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="bg-pink-900 text-white p-3 font-bold text-xl rounded mx-1 w-10">-</button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="bg-pink-900 text-white p-3 font-bold text-xl rounded mx-1 w-10">+</button>
            </div>

            <div className='flex justify-center items-center gap-2 m-2'>
            {/* <button onClick={() => navigate("/steppers")} className="bg-lime-900 text-white p-2 rounded">Buy Now</button> */}
            <button onClick={() => removeItem(item.id)} className="bg-red-800 text-white p-2 rounded">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-8 p-2'>
        <span className='text-xl'>Total Price: RS.<strong className='text-2xl'> {cartTotal}</strong></span>
      </div>

      <div className=" mt-10 flex gap-2 justify-center items-center">
        <button onClick={emptyCart} className="bg-red-800 text-white px-6 py-2 rounded text-lg">Empty Cart</button>
        <button onClick={() => navigate("/personaldetails")} className="bg-lime-900 text-white px-6 py-2 rounded text-lg">Buy Now</button>

       
      </div>
    </div>
  );
};

export default Carts;
