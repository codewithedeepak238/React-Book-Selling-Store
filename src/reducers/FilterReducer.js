export const FilterReducer = (state, action)=>{
    const {type, payload} = action;
    switch(type){
        case 'PRODUCT_LIST':
            return {productList: payload.products}
        case 'SORT_BY':
            return {...state, sortBy: payload.sortBy==='LowToHigh'?'LowToHigh':'HighToLow'}
        case "RATINGS":
            return {...state, ratings: payload.ratings==='4STARSABOVE'?'4STARSABOVE':payload.ratings==='3STARSABOVE'?'3STARSABOVE':payload.ratings==='2STARSABOVE'?'2STARSABOVE':'1STARSABOVE'}
        case 'BEST_SELLER_ONLY':
            return {...state, bestSellerOnly: payload.bestSellerOnly}
        case 'ONLY_IN_STOCK':        
            return {...state, onlyInstock: payload.onlyInstock}
        case 'CLEAR_FILTER':
            return {...state, onlyInstock:false, bestSellerOnly:false, sortBy: null, ratings: null}
        default:
            throw new Error('No case found');
    }
}