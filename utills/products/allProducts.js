import vegs from './vegs';
import meatAndFish from './meatandfish';
import snacks from './snacks';
import petCare from './petCare';
import homeCleaning from './homeCleaning';
import dairy from './dairy';
import cooking from './cooking';
import breakfast from './breakfast';
import beverage from './beverage';
import beauty from './beauty';

const allProducts = [
    { 
     category : "Fruits & Vegtebles",
     data: [...vegs]  
    },
    {
      category : "Meat &  Fish",
      data: [...meatAndFish]  
    },
    {
      category : "Snacks",
      data: [...snacks]  
    },
    {
      category : "Pet Care",
      data: [...petCare]  
    },
    {
      category : "Home Cleaning",
      data: [...homeCleaning]  
    },
    {
      category : "Dairy",
      data: [...dairy]  
    },
    {
      category : "Cooking",
      data: [...cooking]  
    },
    {
      category : "Breakfast",
      data: [...breakfast]  
    },
    {
      category : "Beverage",
      data: [...beverage]  
    },
    {
      category : "Beauty & Health",
      data: [...beauty]  
    }
];

 export default allProducts;