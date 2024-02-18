import { useState, useEffect } from "react"
import { ProductCard } from "../../components"
import { FilterBar } from "./components/FilterBar"
import { useLocation } from "react-router-dom"
import { useFilter } from "../../context/FilterContext";

export const ProductsList = () => {
    const [show, setShow] = useState(false)
    const { products, initialProductList } = useFilter()
    const search = useLocation().search;
    const searchTerm = new URLSearchParams(search).get('q')

    useEffect(()=>{
        async function fetchProducts(){
          const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm?searchTerm:''}`)
          const data = await response.json();
          initialProductList(data)
        }
        fetchProducts()
      }, [searchTerm])
  return (
    <main className="relative">
        <section className="my-5">
            <div className="my-5 flex justify-between">
                <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
                <span>
                    <button onClick={()=>setShow(!show)} className="text-xl dark:text-slate-100 dark:bg-zinc-600 hover:dark:bg-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg p-1">
                        <i class="bi bi-three-dots-vertical"></i>
                    </button>
                </span>
            </div>
            <div className="flex justify-center flex-wrap">
                {products.map((product)=>{
                    return <ProductCard key={product.id} product={product}/>
                })}
            </div>
        </section>
        <FilterBar setShow={setShow} show={show}/>
    </main>
  )
}
