import { Link } from "react-router-dom"

export const CartEmpty = () => {
  return (
    <section className="my-10">
        <div className="border block mx-auto max-w-xl py-10">
            <div className="text-center">
                <span className="text-green-800 text-5xl font-bold dark:text-green-200 bi bi-cart"></span>
            </div>
            <div className="text-center dark:text-white my-5 font-semibold flex flex-col items-center">
                <p>Opps! Your cart looks empty!</p>
                <p className="mb-5">Add eBook to your cart from our store collection.</p>
                <Link to={'/products'} className="w-48 flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue Shopping <i class="ml-1 bi bi-cart"></i></Link>
            </div>
        </div>
    </section>
  )
}
