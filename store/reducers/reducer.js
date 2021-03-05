
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
         };

    
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

        case 'REMOVE_ADDRESS_CARD':
                const cardIndex = state.addresses.findIndex(c=> c.id === action.id);
                const newAddresses = [...state.addresses];
                newAddresses.splice(cardIndex,1);
            return{
                ...state,
                addresses: newAddresses
            }

        case 'ADD_ADDRESS_CARD':
            const newCard = action.cardData;
            return{
                ...state,
                addresses: state.addresses.concat(newCard)
            }

         case 'REMOVE_CONTACT_CARD':
            const cardIndex_ = state.contacts.findIndex(c=> c.id === action.id);
            const newContacts = [...state.contacts];
            newContacts.splice(cardIndex_, 1);
            return{
                ...state,
                contacts: newContacts
            }

         case 'ADD_CONTACT_CARD':
                const newCard_ = action.cardData;
                return{
                    ...state,
                    contacts: state.contacts.concat(newCard_)
                }
         case 'REMOVE_CREDIT_CARD':
              const cardIndex__ = state.creditCards.findIndex(c=> c.num === action.id);
              const newCreditCards = [...state.creditCards];
              newCreditCards.splice(cardIndex__, 1);
               return{
                ...state,
                creditCards: newCreditCards
                 }

        default: return state;
    }
}

export default reducer;