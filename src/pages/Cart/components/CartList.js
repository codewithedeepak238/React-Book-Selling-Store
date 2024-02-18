import { useState } from "react";
import { useCart } from "../../../context"
import { CartCard } from "./CartCard"
import { Checkout } from "./Checkout";

export const CartList = ({cartItemCount}) => {
    const [showCheckout, setCheckout] = useState(false)
    const {cartList, total} = useCart();
    
  return (
    <>
      <section className="w-full">
        <div className="max-w-4xl mx-auto">
            <h1 className="underline underline-offset-8 text-gray-900 mt-10 mb-7 font-bold dark:text-white text-center text-2xl">My Cart ({cartList.length})</h1>
            {cartList.map((product)=>(<CartCard product={product}/>))}
            <div className="mt-8 block p-2 dark:text-white text-xl border-b border-gray-200 dark:border-gray-700">
                <span className="">Total Amount:</span>
                <span className="float-right">${total}</span>
            </div>
            <button onClick={()=>setCheckout(!showCheckout)} className="mt-5 float-right text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">PLACE ORDER <i class="bi bi-arrow-right"></i></button>
        </div>
      </section>
      {showCheckout && <Checkout setCheckout={setCheckout} showCheckout={showCheckout}/>}
    </>
  )
}
