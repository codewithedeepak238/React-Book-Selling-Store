import { Link } from "react-router-dom"
import { useCart } from "../../../context"

export const CartCard = ({product}) => {
  const {removeCart} = useCart()
  return (
    <section className="mb-3 w-full">
        <div className="block mx-auto max-w-4xl">
            <div class="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Link to={`/products/${product.id}`}><img class="object-cover w-full rounded-t-lg h-28 w-48 md:rounded-none md:rounded-s-lg" src={product.poster} alt={product.name}/></Link>
                <div class="flex flex-col w-full justify-between p-4 leading-normal">
                    <Link class="flex justify-between mb-2 text-xl tracking-tight text-gray-900 dark:text-white">{product.name}<span className="tracking-tight text-m text-gray-900 dark:text-white">${product.price}</span></Link>
                    <p onClick={()=>removeCart(product)} class="cursor-pointer font-semibold mb-3 font-normal text-red-700">Remove</p>
                </div>
            </div>
        </div>
    </section>
  )
}
