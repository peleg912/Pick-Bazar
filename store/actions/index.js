
export const addProduct = (productData)=> {
    return{
        type: 'ADD_PRODUCT',
        product: productData
    }
}


export const removeProduct = (productId)=> {
    return{
        type: 'REMOVE_PRODUCT',
        id: productId
    }
}

export const clearAllProducts = ()=> {
    return{
        type: 'CLEAR_PRODUCTS',
    }
}

export const updateCategory = (categoryName)=> {
    return{
        type: 'UPDATE_CATEGORY',
        category: categoryName
    }
}