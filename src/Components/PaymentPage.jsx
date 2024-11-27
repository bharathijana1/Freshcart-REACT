import React, { useState } from "react";
import { useCart } from "react-use-cart";

const PaymentPage = ({ formtitle }) => {
  const [paymentMethod, setPaymentMethod] = useState(""); 
  const [upiMethod, setUpiMethod] = useState(""); 

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setUpiMethod(""); 
  };
  const { cartTotal, items, totalItems  } = useCart();

const paidsuccessfully = () => {
  alert("Successfully Paid")
}

  return (
    <div className="h-screen ">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5 mx-auto p-1 lg:p-4 shadow-sm shadow-pink-400 mt-6">
      <div className="flex flex-col justify-start lg:justify-end lg:items-end md:px-5 md:mx-5 border p-1">
      <h2 className="text-xl font-semibold mb-4">Total Amount to Pay({totalItems} items): RS. {cartTotal}</h2>
      <h1 className="text-xl font-semibold mb-4">Shipping: Free</h1>
      </div>
      

      <div className="mb-4 flex flex-col lg:flex-row justify-center lg:justify-start gap-5 lg:gap-10 px-2 md:px-6 md:mx-6">
        <label className=" text-lg font-medium">
          <input
            type="radio"
            name="paymentMethod"
            value="cashOnDelivery"
            checked={paymentMethod === "cashOnDelivery"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          Cash on Delivery
        </label>
        <label className="text-lg font-medium">
          <input
            type="radio"
            name="paymentMethod"
            value="upiPayment"
            checked={paymentMethod === "upiPayment"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          UPI Payment
        </label>
      </div>

      {paymentMethod === "cashOnDelivery" && (
        <div className="text-center mt-4 ">
          <button className="btn text-white bg-pink-900 hover:bg-pink-950 p-2 px-8 text-xl font-medium" onClick={paidsuccessfully}>
          Proceed to Pay
          </button>
        </div>
      )}

      {paymentMethod === "upiPayment" && (
        <div className="mt-4 md:px-6 md:mx-6">
          <div className="flex py-3">
          <label className="block text-lg p-3 ">
            <input
              type="radio"
              name="upiMethod"
              value="googlePay"
              checked={upiMethod === "googlePay"}
              onChange={(e) => setUpiMethod(e.target.value)}
              className="mr-5 "
            />
            Google Pay
            
          </label>
          <img src="../src/Components/img/google-pay.png" alt="google pay" width="50px" />
          </div>
          <div className="flex py-3">
          <label className="block text-lg p-3">
            <input
              type="radio"
              name="upiMethod"
              value="phonePay"
              checked={upiMethod === "phonePay"}
              onChange={(e) => setUpiMethod(e.target.value)}
              className="mr-5 "
            />
            Phone Pay
          </label>
          <img src="../src/Components/img/phone-payy.png" alt="phone pay" width="50px" />
          </div>
          <div className="flex py-3">
          <label className="block text-lg p-3">
            <input
              type="radio"
              name="upiMethod"
              value="phonePay"
              checked={upiMethod === "phonePay"}
              onChange={(e) => setUpiMethod(e.target.value)}
              className="mr-5 "
            />
            Paytm
          </label>
          <img src="../src/Components/img/paytm.png" alt="phone pay" width="50px" />
          </div>
          
          
        </div>
      )}

      {paymentMethod === "upiPayment" && upiMethod && (
        <div className="text-center my-4">
          <button className="btn text-white bg-pink-900 hover:bg-pink-950 p-2 px-8 text-xl font-medium" onClick={paidsuccessfully}>
            Proceed to Pay
          </button>
        </div>
      )}
    </div>

    </div>

    
  );
};

export default PaymentPage;
