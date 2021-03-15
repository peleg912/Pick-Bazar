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
                productsDistribution: newDistribution,
               
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
            productsDistribution: _newDistribution,
        }

        case 'CLEAR_PRODUCT':
            const title = action.title;
            return{
                ...state,
                products: state.products.filter(p=> p.title !== title),
                productsDistribution: state.productsDistribution.filter(p=> p.productTitle !== title),
                totalPrice: (state.totalPrice - action.priceToReduce)
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

        case 'EDIT_ADDRESS_CARD':
            const updatedCard = action.cardData;
            const cardIndex___ = state.addresses.findIndex(c=> c.id === updatedCard.id);
            console.log(cardIndex___);
            const newAddresses_ = [...state.addresses];
            newAddresses_[cardIndex___] = updatedCard;
            return{
                ...state,
                addresses: newAddresses_
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
        case 'EDIT_CONTACT_CARD':
            const updatedCard_ = action.cardData;
            const cardIndex____ = state.contacts.findIndex(c=> c.id === updatedCard_.id);
            const newContacts__ = [...state.contacts];
            newContacts__[cardIndex____] = updatedCard_;
            return{
                ...state,
                contacts: newContacts__
            }

         case 'REMOVE_CREDIT_CARD':
              const cardIndex__ = state.creditCards.findIndex(c=> c.num === action.id);
              const newCreditCards = [...state.creditCards];
              newCreditCards.splice(cardIndex__, 1);
               return{
                ...state,
                creditCards: newCreditCards
                 }
        case 'ADD_CREDIT_CARD':
            const newCreditCard = {img:'x.jpg', num: action.cardNum}
            return{
                ...state,
                creditCards: state.creditCards.concat(newCreditCard)
            }
        case 'UPDATE_ADDRESS':
            const orederSum_ = {...state.orderSum};
            orederSum_.address = action.data;
            return{
                ...state,
                orderSum: orederSum_
            }
        case 'UPDATE_TIME':
                const orederSum__ = {...state.orderSum};
                orederSum__.time = action.data;
                return{
                    ...state,
                    orderSum: orederSum__
                }
        case "ADD_SEARCH_RES":
            return{
                ...state,
                searchRes:{
                    searchTerm : action.search,
                    res: action.data
                }
            }
        case "CHANGE_LANG":
            return{
                ...state,
                currentLang: action.language
            }
        default: return state;
    }
}

export default reducer;