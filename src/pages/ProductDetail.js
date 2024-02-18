import { useState, useEffect } from "react";
import { useCart } from "../context";
import { Rating } from "../components";
import { useParams } from "react-router-dom";
export const ProductDetail = () => {
    const {addTocart, cartList, removeCart} = useCart()
    const [instock, setInstock] = useState(false);
    const [product,setproduct] = useState([]);
    const {id} = useParams()

    
    useEffect(()=>{
        async function fetchproduct(){
        const response = await fetch(`http://localhost:8000/products/${id}`)
        const data = await response.json();
        setproduct(data)
    }
    fetchproduct()
    }, [id])

    useEffect(()=>{
        const value = cartList.find(item=>item.id === product.id)
        if(value){
            setInstock(true)
        }else{
            setInstock(false)
        }
    })
return (
    <main>
        <section className="my-10">
            <h1 className="text-3xl font-bold text-center dark:text-slate-100">{product.name}</h1>
            <p className="text-l my-5 text-center dark:text-slate-100">{product.overview}</p>
            <div className="flex flex-col wrap justify-center lg:flex-row">
                <div className="lg:max-w-xl lg:mr-5 my-2">
                    <img className='rounded-lg w-full max-h-full' src={product.poster} alt={product.name} />
                </div>
                <div className="lg:max-w-xl my-2">
                    <h3 className="text-3xl font-semibold dark:text-gray-200">${product.price}</h3>
                    <div className="my-3">
                        <Rating rating={product.rating}/>
                    </div>
                    <div className="my-3">
                        {product.best_seller && <span className="p-1 mr-2 border border-red-200 text-red-700 bg-orange-100 text-sm font-medium rounded">BEST SELLER</span>}
                        <span className="p-1 mr-2 border border-teal-200 text-teal-800 bg-teal-50 text-sm font-medium rounded">{product.in_stock?'INSTOCK': 'OUT OF STOCK'}</span>
                        {product.size && <span className="p-1 mr-2 border border-indigo-200 text-indigo-500 bg-indigo-100 text-sm font-medium rounded">{product.size} MB</span>}
                    </div>
                    {instock?(<button onClick={()=>removeCart(product)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove Item <i class="bi bi-trash3-fill"></i></button>):(<button onClick={()=>addTocart(product)} className={`inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${product.in_stock?'':'cursor-not-allowed'}`} disabled={product.in_stock? "":'disable'}>Add To Cart +</button>)}
                    <p className="mt-5 dark:text-gray-200">{product.long_description}</p>
                </div>
            </div>
        </section>
    </main>
  )
}
