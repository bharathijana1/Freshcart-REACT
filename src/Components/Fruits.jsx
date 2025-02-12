import React from 'react';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';  
import AppleImg from '../Components/img/fruits/apple.jpg';
import BananaImg from '../Components/img/fruits/banana.jpg';
import GrapesImg from '../Components/img/fruits/grapes.jpg';
import KiwiImg from '../Components/img/fruits/kivi.jpg';
import OrangeImg from '../Components/img/fruits/orange.jpg';
import StraberryImg from '../Components/img/fruits/straberry.jpg';
import GuavaImg from '../Components/img/fruits/guava.jpg';
import WatermelonImg from '../Components/img/fruits/watermelon.jpg';
import MangoImg from '../Components/img/fruits/mango.jpg';
import FruitIconImg from './img/fruitsicon.png';

const Fruits = () => {
  const { addItem } = useCart();  
  const navigate = useNavigate();  

  const fruititem = [
    {
      id: 1,
      productimg: AppleImg,
      productalt: "apple img",
      productname: "Apple",
      price: 50,  
      width: "300px",
      height: "250px",
    },
    {
      id: 2,
      productimg: BananaImg,
      productalt: "banana img",
      productname: "Banana",
      price: 50, 
      width: "300px",
      height: "250px",
    },
    {
      id: 3,
      productimg: GrapesImg,
      productalt: "grapes img",
      productname: "Grapes",
      price: 50, 
      width: "300px",
      height: "250px",
    },
    {
      id: 4,
      productimg: KiwiImg,
      productalt: "Kivi img",
      productname: "kivi",
      price: 50, 
      width: "300px",
      height: "250px",
    },
    {
      id: 5,
      productimg: OrangeImg,
      productalt: "Orange img",
      productname: "Orange",
      price: 50, 
      width: "300px",
      height: "250px",
    },
    {
      id: 6,
      productimg: StraberryImg,
      productalt: "Strawberry img",
      productname: "Strawberry",
      price: 50, 
      width: "300px",
      height: "250px",
    },
    {
      id: 7,
      productimg: GuavaImg,
      productalt: "Guava img",
      productname: "Guava",
      price: 50, 
      width: "300px",
      height: "250px",
    },
    {
      id: 8,
      productimg: WatermelonImg,
      productalt: "watermelon img",
      productname: "Watermelon",
      price: 50, 
      width: "300px",
      height: "250px",
    },
    {
      id: 9,
      productimg: MangoImg,
      productalt: "mango img",
      productname: "Mango",
      price: 50, 
      width: "300px",
      height: "250px",
    },
  ];

  const handleAddToCart = (item) => {
    addItem(item);  
    // navigate('/carts'); 
  };

  return (
    <div>
      <div className='flex justify-start md:justify-center gap-3 p-2 m-2'>
        <img src={FruitIconImg} alt="fruit icon" width="100px" height="100px" />
        <h1 className='text-center font-bold flex justify-center items-center text-3xl'>Fruits</h1>
      </div>

      <div className='grid grid-cols-2 gap-4 md:flex md:justify-center md:items-center md:flex-wrap mx-auto w-full mt-5 md:mt-10 p-1 md:pb-10'>
        {fruititem.map((items, index) => (
          <div key={index} className='border border-gray-700 md:w-80'>
            <div className='flex justify-center items-center'>
              <img
                src={items.productimg}
                alt={items.productalt}
                width={items.width}
                height={items.height}
                className='shadow-sm shadow-pink-600 rounded-xl h-60 md:h-72 m-1'
              />
            </div>
            <h1 className='text-xl font-medium text-center p-3 capitalize'>{items.productname}</h1>
            <h1 className='text-lg text-center'>RS. {items.price}</h1>
            <div className='text-center mt-3 p-2'>
              <button
                className='bg-pink-900 hover:bg-pink-950 text-white text-lg p-2 px-6'
                onClick={() => handleAddToCart(items)} 
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
