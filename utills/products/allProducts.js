import vegs from './vegs';
import meatAndFish from './meatandfish';

const allProducts = [
    { 
     category : "Fruits & Vegtebles",
     data: [...vegs]  
    },
    {
      category : "Meat &  Fish",
      data: [...meatAndFish]  
    }
];

 export default allProducts;