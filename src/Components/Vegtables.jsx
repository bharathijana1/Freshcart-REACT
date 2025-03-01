import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import OnionImg from '../Components/img/vegetables/onion.jpg';
import TomotoImg from '../Components/img/vegetables/tomato.jpg';
import PotatoImg from '../Components/img/vegetables/potato.jpg';
import CucumberImg from '../Components/img/vegetables/cucumber.jpg';
import CarrotImg from '../Components/img/vegetables/carrot.jpg';
import BeetrootImg from '../Components/img/vegetables/beetroot.jpg';
import BrinjalImg from '../Components/img/vegetables/brinjal.jpg';
import CornImg from '../Components/img/vegetables/corn.jpg';
import MushroomImg from '../Components/img/vegetables/mushroom.jpg';
import PlantainImg from '../Components/img/vegetables/plantain.jpg';
import CapsicumImg from '../Components/img/vegetables/capsicum.jpg';
import CaliflowerImg from '../Components/img/vegetables/califlower.jpg';
import ChilliImg from '../Components/img/vegetables/chilli.jpg';
import MintImg from '../Components/img/vegetables/mint.jpg';
import BeansImg from '../Components/img/vegetables/beans.jpg';
import VegIcon from './img/vegetablesicon.png';


const Vegtables = () => {

  
  const vegtableitems = [
    {
      id: 1, productimg: OnionImg, productalt: "Onion img", productname: "Onion", price: 50, width:"300px", height: "250px",
    },
    {
      id: 2, productimg: TomotoImg,productalt: "Tomato img", productname: "Tomato", price: 82, width:"300px", height: "250px",
    },
    {
       id: 3, productimg: PotatoImg,productalt: "Potato img", productname: "Potato", price: 55, width:"300px", height: "250px",
    },
    {
       id: 4, productimg: CucumberImg,productalt: "cucumber img", productname: "cucumber", price: 65, width:"300px", height: "250px",
    },
    {
       id: 5, productimg: CarrotImg,productalt: "carrot img", productname: "carrot", price: 20, width:"300px", height: "250px",
    },
    {
       id: 6, productimg: BeetrootImg,productalt: "beetroot img", productname: "beetroot",price: 30, width:"300px", height: "250px",
    },
    {
       id: 7, productimg: BrinjalImg,productalt: "brinjal img", productname: "brinjal", price: 58, width:"300px", height: "250px",
    },
    {
       id: 8, productimg: CornImg,productalt: "corn img", productname: "corn", price: "50/kg", width: 54, height: "250px",
    },
    {
       id: 9, productimg: MushroomImg,productalt: "mushroom img", productname: "mushroom", price: 45, width:"300px", height: "250px",
    },
    {
       id: 10, productimg: PlantainImg,productalt: "plantain img", productname: "plantain", price: 10, width:"300px", height: "250px",
    },
    {
       id: 11, productimg: CapsicumImg,productalt: "capsicum img", productname: "capsicum", price: 25, width:"300px", height: "250px",
    },
    {
       id: 12, productimg: CaliflowerImg ,productalt: "cauliflower img", productname: "cauliflower", price: 20, width:"300px", height: "250px",
    },
    {
       id: 13, productimg: ChilliImg,productalt: "chilli img", productname: "red chilli", price: 44, width:"300px", height: "250px",
    },
    {
       id: 14, productimg: MintImg,productalt: "mint img", productname: "mint", price: 22, width:"300px", height: "250px",
    },
    {
       id: 15, productimg: BeansImg,productalt: "beans img", productname: "beans", productprice: 20, width:"300px", height: "250px",
    },

  ];

  const { addItem } = useCart();
  const navigate = useNavigate();
  const handleAddToCart =(item) => {
    addItem(item);
   //  navigate("/carts");
  }

  return (
    <div>
      <div className='flex justify-start md:justify-center gap-3 p-2 m-2'>
        <img src={VegIcon} alt="vegicon" width="100px" height="100px" />
        <h1 className='text-center font-bold flex justify-center items-center text-3xl'>Vegetables</h1>
      </div>
      <div className='grid grid-cols-2 gap-4 md:flex md:justify-center md:items-center md:flex-wrap mx-auto w-full mt-5 md:mt-10 p-1 md:pb-10 '>
          {
            vegtableitems.map((items, index) => (
              <div key={index} className='border border-gray-700 md:w-80'>
                <div className='flex justify-center items-center'>
                <img src={items.productimg} alt={items.productalt} width={items.width} height={items.height} className='shadow-sm shadow-pink-600 rounded-xl h-72 m-1' />
                </div>
                <h1 className='text-xl font-medium text-center p-3 capitalize'>{items.productname}</h1>
                <h1 className='text-lg text-center'>RS. {items.price}</h1>
                <div className='text-center mt-3 p-2'>
                <button className='bg-pink-900 hover:bg-pink-950 text-white text-lg p-2 px-6' onClick={() => handleAddToCart(items)} >Add to cart</button>
                </div>
              </div>
            ))

          }
          
        </div>
      
    </div>
  )
}

export default Vegtables;
