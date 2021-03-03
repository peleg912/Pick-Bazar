
 const updateObject = (oldObj, newProps)=> {
    return{
        ...oldObj,
        ...newProps
    }
 
 }


const reducer = (state= null, action)=> {
    switch (action.type){
        case 'ADD_PRODUCT':
            const newProduct = action.product;
            const newPrice = state.totalPrice + newProduct.price;
            console.log(newPrice);
            return {
                ...state,
                products: state.products.concat(newProduct),
                totalPrice: newPrice
            }

        case 'REMOVE_PRODUCT':
         const product = action.product;
         const price = state.totalPrice - product.price;
         const newProducts = state.products.filter(p=> p.id !== product.id);
         return {
             ...state,
            products: newProducts,
            totalPrice: price
        }

        case 'CLEAR_PRODUCTS':
            return{
                ...state,
                products: []
            }

        case 'UPDATE_CATEGORY':
            return{
                ...state,
                currentCategory: action.category
            }

        default: return state;
    }
}

export default reducer;