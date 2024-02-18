import { useFilter } from "../../../context/FilterContext"

export const FilterBar = ({setShow, show}) => {
    const {state, dispatch} = useFilter();
  return (
        <section>
            <aside id="default-sidebar" className={`transition-all ease-in-out duration-500 shadow-lg dark:shadow-zinc-300 fixed top-0 ${show?'left-0':'-left-72'} z-40 w-64 h-screen -translate-x-full sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="flex justify-between text-xl px-2 pb-1 border-b dark:text-slate-100">
                        <h2 className="">Filter</h2>
                        <button onClick={()=>setShow(false)} className="rounded"><i className="bi bi-x-circle"></i></button>
                    </div>
                    <ul className="py-2 px-2 dark:text-slate-100">
                        <li className="mb-5">
                            <p className="text-l my-2 font-semibold">Sort by</p>
                            <div className="flex items-center my-1">
                                <input onChange={()=>dispatch({type:'SORT_BY', payload:{sortBy: 'LowToHigh'}})} checked={state.sortBy==='LowToHigh' || false} id='price-sort-1' type='radio' value='' name='price-sort' className="mr-1"/>
                                <label htmlFor="price-sort-1" className="text-sm">Price-Low to High</label>
                            </div>
                            <div onChange={()=>dispatch({type:'SORT_BY', payload:{sortBy: 'HighToLow'}})} checked={state.sortBy==='HighToLow' || false } className="flex items-center my-1">
                                <input id='price-sort-2' type='radio' value='' name='price-sort' className="mr-1"/>
                                <label htmlFor="price-sort-2" className="text-sm">Price-High to Low</label>
                            </div>
                        </li>
                        <li className="mb-5">
                            <p className="text-l my-2 font-semibold">Rating</p>
                            <div className="flex items-center my-1">
                                <input onChange={()=>dispatch({type:'RATINGS', payload:{ratings:'4STARSABOVE'}})} checked={state.ratings==='4STARSABOVE' || false} id='rating-sort-2' type='radio' value='' name='rating-sort' className="mr-1"/>
                                <label htmlFor="rating-sort-2" className="text-sm">4 Stars & Above</label>
                            </div>
                            <div className="flex items-center my-1">
                                <input onChange={()=>dispatch({type:'RATINGS', payload:{ratings:'3STARSABOVE'}})} checked={state.ratings==='3STARSABOVE' || false} id='rating-sort-3' type='radio' value='' name='rating-sort' className="mr-1"/>
                                <label htmlFor="rating-sort-3" className="text-sm">3 Stars & Above</label>
                            </div>
                            <div className="flex items-center my-1">
                                <input onChange={()=>dispatch({type:'RATINGS', payload:{ratings:'2STARSABOVE'}})} checked={state.ratings==='2STARSABOVE' || false} id='rating-sort-4' type='radio' value='' name='rating-sort' className="mr-1"/>
                                <label htmlFor="rating-sort-4" className="text-sm">2 Stars & Above</label>
                            </div>
                            <div className="flex items-center my-1">
                                <input onChange={()=>dispatch({type:'RATINGS', payload:{ratings:'1STARSABOVE'}})} checked={state.ratings==='1STARSABOVE' || false} id='rating-sort-5' type='radio' value='' name='rating-sort' className="mr-1"/>
                                <label htmlFor="rating-sort-5" className="text-sm">1 Stars & Above</label>
                            </div>
                        </li>
                        <li>
                            <p className="text-l my-2 font-semibold">Other Filters</p>
                            <div className="flex items-center my-1">
                                <input onChange={()=>dispatch({type:'BEST_SELLER_ONLY', payload: {bestSellerOnly: !state.bestSellerOnly}})} checked={state.bestSellerOnly || false} id='best-seller' type='checkbox' value='' name='best-seller' className="mr-1"/>
                                <label htmlFor="best-seller" className="text-sm">Best Seller Only</label>
                            </div>
                            <div className="flex items-center my-1">
                                <input onChange={()=>dispatch({type:'ONLY_IN_STOCK', payload: {onlyInstock: !state.onlyInstock}})} checked={state.onlyInstock || false} id='inStock' type='checkbox' value='' name='inStock' className="mr-1"/>
                                <label htmlFor="inStock" className="text-sm">INSTOCK Only</label>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <button onClick={()=>dispatch({type:'CLEAR_FILTER'})} type="button" class="w-3/5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Clear Filter</button>
                    </div>
                </div>
            </aside>
        </section>
  )
}
