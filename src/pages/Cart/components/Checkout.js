import { useEffect, useState } from "react";
import { useCart, useUser } from "../../../context"

export const Checkout = ({setCheckout}) => {
    const {user, setUser} = useUser();
    const {cartList, total} = useCart();

    const token = JSON.parse(sessionStorage.getItem('token'));
    const cbid = JSON.parse(sessionStorage.getItem('cbid'));
    
    useEffect(()=>{

        async function getUser(){
            const response = await fetch(`http://localhost:8000/600/users/${cbid}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
            });
            const data = await response.json()
            setUser(data)
        }
        getUser()
    },[])

    const order = {
        cartList: cartList,
        amount_paid: total,
        user: {
            name: user.name,
            email: user.email,
            id: cbid
        }
    }

    async function handleOrderSubmit(e){
        e.preventDefault()
        const response = await fetch('http://localhost:8000/660/orders', {
            method: "POST",
            headers: {'Content-Type': 'Application/json', Authorization: `Bearer ${token}`},
            body: JSON.stringify(order)
        })
    }


  return (
    <section className="absolute h-full w-full flex items-center bg-gray-900/50 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
        <div className="relative mx-auto my-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleOrderSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white"><i class="bi bi-credit-card"></i> CARD PAYMENT</h5>
                <i onClick={()=>setCheckout(false)} className="mt-0 bi bi-x absolute text-2xl font-bold top-0 right-5 cursor-pointer dark:text-white"></i>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
                    <input type="text" autoComplete="off" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={user.name} placeholder="Alex Blaze" required/>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                    <input type="email" autoComplete="off" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={user.email} placeholder="name@example.com" required/>
                </div>
                <div>
                    <label htmlFor="card" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Number:</label>
                    <input type="number" name="card" id="card" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value='784123692145' required/>
                </div>
                <div>
                    <label htmlFor="expiry" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiry Date:</label>
                    <div className="flex">
                        <input type="number" name="expiry" id="expiry" className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 mr-3 text-sm rounded-lg w-16 focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value='03' required/>
                        <input type="number" name="expiry" id="expiry" className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-16 focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value='11' required/>
                    </div>
                </div>
                <div>
                    <label htmlFor="security" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Security Code:</label>
                    <input type="number" name="security" id="security" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value='869' required/>
                </div>
                <div>
                    <p className="text-center font-semibold dark:text-white text-xl text-green-800 dark:text-green-200">${total}</p>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="bi bi-lock-fill"></i> Pay Now</button>
            </form>
        </div>
    </section>
  )
}
