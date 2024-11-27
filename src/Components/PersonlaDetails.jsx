import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name").min(3, "Minimum 3 characters required").max(20, "Maximum 20 characters allowed"),
  email: Yup.string().email("Invalid email format").required("Please enter your email").matches(/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/, "Only gmail.com and yahoo.com are allowed"),
  phoneno: Yup.string().required("Please enter your phone number").length(10, "Phone number must be exactly 10 digits").matches(/^\d{10}$/, "Phone number must be a valid 10-digit number"),
  address: Yup.string().required("Please enter your address").min(10, "Minimum 10 characters required").max(40, "Maximum 40 characters allowed"),
  pincode: Yup.string().required("Please enter your pincode"),
});

const PersonlaDetails = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submit handler (for form data)
  const onSubmit = (data) => {
    console.log(data);
    navigate("/paymentdetails")
  };

  return (
    <>
    <h2 className="text-xl font-semibold   flex justify-center p-4">Personal Information</h2>
    <div className='flex justify-center p-2 h-screen'>
      
      <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/2 flex items-start justify-start flex-col mt-10 '>
      <div className='w-full p-2 shadow-sm shadow-pink-500'>

      <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1'>
          <label htmlFor="name" className='w-full md:w-1/4 text-lg'>Name <span className='text-red-500 px-2'>*</span></label>
          <input
            type="text"
            name="name"
            {...register("name")}
            className='border border-gray-600 w-full md:w-1/2 p-1 text-lg'
            placeholder='Enter your name'
          />
          
        </div>
        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1'>
        <h1 className='w-full md:w-1/4 text-lg'></h1>
        {errors.name && <p className="text-red-500 w-full md:w-1/2">{errors.name.message}</p>}
        </div>

        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1 '>
          <label htmlFor="email" className='w-full md:w-1/4 text-lg'>Email <span className='text-red-500 px-2'>*</span></label>
          <input
            type="email"
            name="email"
            {...register("email")}
            className='border border-gray-600 w-full md:w-1/2 p-1 text-lg'
            placeholder='Enter your email'
          />
          
        </div>
        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1'>
        <h1 className='w-full md:w-1/4 text-lg'></h1>
        {errors.email && <p className="text-red-500 w-full md:w-1/2">{errors.email.message}</p>}
        </div>

        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1 '>
          <label htmlFor="phoneno" className='w-full md:w-1/4 text-lg'>Phone No <span className='text-red-500 px-2'>*</span></label>
          <input
            type="text"
            name="phoneno"
            {...register("phoneno")}
            className='border border-gray-600 w-full md:w-1/2 p-1 text-lg'
            placeholder='Enter your phone no'
          />
        </div>
        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1'>
        <h1 className='w-full md:w-1/4 text-lg'></h1>
        {errors.phoneno && <p className="text-red-500 w-full md:w-1/2">{errors.phoneno.message}</p>}
        </div>

        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1'>
          <label htmlFor="address" className='w-full md:w-1/4 text-lg'>Address <span className='text-red-500 px-2'>*</span></label>
          <input
            type="text"
            name="address"
            {...register("address")}
            className='border border-gray-600 w-full md:w-1/2 p-1 text-lg'
            placeholder='Enter your address'
          />
        </div>
        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1'>
        <h1 className='w-full md:w-1/4 text-lg'></h1>
        {errors.address && <p className="text-red-500 w-full md:w-1/2">{errors.address.message}</p>}
        </div>

        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1'>
          <label htmlFor="pincode" className='w-full md:w-1/4 text-lg'>Pincode <span className='text-red-500 px-2'>*</span></label>
          <input
            type="text"
            name="pincode"
            {...register("pincode")}
            className='border border-gray-600 w-full md:w-1/2 p-1 text-lg'
            placeholder='Enter your Pincode'
          />
        </div>
        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1'>
        <h1 className='w-full md:w-1/4 text-lg'></h1>
        {errors.pincode && <p className="text-red-500 w-full md:w-1/2">{errors.pincode.message}</p>}
        </div>

        <div className='w-full md:w-3/4 flex justify-center items-center flex-col md:flex-row mx-auto p-1 m-1'>
          <button type="submit" className="btn text-white bg-pink-900 hover:bg-pink-950 p-2 px-8" >
            Next
          </button>
        </div>

      </div>

        

      </form>
    </div>
    </>
    
  );
};

export default PersonlaDetails;
