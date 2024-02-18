import { Link, useSearchParams } from "react-router-dom"
import { Rating } from "./Rating"
import { useCart } from "../../context"
import { useEffect, useState } from "react"

export const ProductCard = ({product}) => {
    const {addTocart, cartList, removeCart} = useCart()
    const [instock, setInstock] = useState(false);

    useEffect(()=>{
        const value = cartList.find(item=>item.id === product.id)
        if(value){
            setInstock(true)
        }else{
            setInstock(false)
        }
    },[cartList])
    const {id, name, overview, price, poster, rating, in_stock, best_seller} = product
  return (
        <div className="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/products/${id}`} className="relative" >
                <img className="rounded-t-lg w-full h-64 object-center object-cover" src={poster} alt={name} />
                {best_seller && <span className="absolute top-2 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}
            </Link>
            <div className="p-5">
                <Link to={`/products/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
                <div className="my-2">
                    <Rating rating={rating}/>
                </div>
                <div className="flex justify-between align-center">
                    <p className="text-2xl dark:text-white">${price}</p>
                    {instock?(<button onClick={()=>removeCart(product)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove Item <i class="bi bi-trash3-fill"></i></button>):(<button onClick={()=>addTocart(product)} className={`inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${in_stock?'':'cursor-not-allowed'}`} disabled={in_stock? "":'disable'}>Add To Cart +</button>)}
                </div>
            </div>
        </div>
  )
}
