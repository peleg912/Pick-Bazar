
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
            let newDistribution = [...state.productsDistribution];
            const p = state.productsDistribution.findIndex(pro=> pro.productTitle === newProduct.title);

            if(p !== -1){
                newDistribution[p].amount= (newDistribution[p].amount)+1;
            }
            else{
                newDistribution = newDistribution.concat({
                    productTitle: newProduct.title, 
                    amount: 1,
                    price: newProduct.price,
                    img: newProduct.img
                });
                
            }

            return {
                ...state,
                products: state.products.concat(newProduct),
                totalPrice: newPrice,
                productsDistribution: newDistribution
            }

        case 'REMOVE_PRODUCT':
         const product = action.product;
         const price = state.totalPrice - product.price;
         const newProducts = state.products.filter(p=> p.id !== product.id);
         let _newDistribution = [...state.productsDistribution];
         const _p = state.productsDistribution.findIndex(pro=> pro.productTitle === product.title);
         if(_newDistribution[_p].amount === 1){
            _newDistribution.splice(_p,1);
         }else{
             _newDistribution[_p].amount = (_newDistribution[_p].amount)-1;
         }

         return {
             ...state,
            products: newProducts,
            totalPrice: price,
            productsDistribution: _newDistribution
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