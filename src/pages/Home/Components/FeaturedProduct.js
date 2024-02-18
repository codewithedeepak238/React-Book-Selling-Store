import { useEffect, useState } from "react"
import { ProductCard } from "../../../components"

export const FeaturedProduct = () => {
  const [products,setProducts] = useState([]);
  
  useEffect(()=>{
    async function fetchProducts(){
      const response = await fetch('http://localhost:8000/featured_products')
      const data = await response.json();
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <section className="my-20">
        <h1 className="text-center mb-10 underline-offset-4 text-2xl font-semibold underline dark:text-slate-100">Featured eBooks</h1>
        <div className="flex justify-center flex-wrap">
            {
              products.map((product)=>(
                <ProductCard key={product.id} product={product} />
              ))
            }
        </div>
    </section>
  )
}
