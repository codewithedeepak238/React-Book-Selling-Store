import { createContext, useContext, useReducer } from "react"
import { FilterReducer } from "../reducers";

const filterInitial = {
    productList: [],
    onlyInstock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitial);

export const FilterProvider = ({children})=>{
    const [state, dispatch] = useReducer(FilterReducer, filterInitial)   
    function initialProductList(products){
        dispatch({
            type: 'PRODUCT_LIST',
            payload: {   
                products: products
            }
        })
    }

    // FOr instock
    function instock(products){
        if(state.onlyInstock){
            return products.filter((product)=>product.in_stock === true)
        }
        return products;
    }
    // FOr bestseller
    function bestseller(products){
        if(state.bestSellerOnly){
            return products.filter((product)=>product.best_seller === true)
        }
        return products
    }
    // For ratings
    function ratingSort(products){
        if(state.ratings === '4STARSABOVE'){
            return products.filter((product)=>product.rating>=4)
        }
        if(state.ratings === '3STARSABOVE'){
            return products.filter((product)=>product.rating>=3)
        }
        if(state.ratings === '2STARSABOVE'){
            return products.filter((product)=>product.rating>=2)
        }
        if(state.ratings === '1STARSABOVE'){
            return products.filter((product)=>product.rating>=1)
        }
        return products
    }
    // FOr price sort
    function priceSort(products){
        if(state.sortBy === 'LowToHigh'){
            return products.sort((a,b)=>a.price - b.price)
        }
        if(state.sortBy === 'HighToLow'){
            return products.sort((a,b)=>b.price - a.price)
        }
        return products
    }

    const filterdList = ratingSort(priceSort(bestseller(instock(state.productList))));

    const value = {
        state,
        dispatch,
        products: filterdList,
        initialProductList
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = ()=> useContext(FilterContext);