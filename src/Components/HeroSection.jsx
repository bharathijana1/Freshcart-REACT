import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from '../Components/img/fruitsandveg.jpg';

export default function HeroSection() {
  return (
    <div className='md:h-screen p-2 flex flex-col md:flex-row lg:flex-row  justify-around items-center mx-auto bg-rose-100 '>
            <div className="herotext w-full md:w-1/2 flex flex-col justify-center items-center">
                <h1 className='text-xl lg:text-2xl xl:text-3xl text-center p-2 md:p-2 font-bold '>Convenient Online Shopping</h1>
                <h2 className='text-center text-base lg:text-lg xl:text-xl p-2 md:p-2 '>Order your favorite fruits and veggies online and enjoy convenient home delivery</h2>
                <a href="#readytoshop">
                <button className='bg-pink-900 hover:bg-pink-950 text-white font-medium rounded-full uppercase m-4 lg:m-5 p-3 px-5 lg:p-4 lg:px-8 lg:text-lg'>Ready to Shop</button>
                </a>
                

            </div>
            <div className=" p-3 px-6 md:p-2">
                <img className='rounded-3xl' src={HeroImg} alt="carpartnership-img" />

            </div>
        </div>
        
  )
}
