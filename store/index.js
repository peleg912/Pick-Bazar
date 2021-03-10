import {createStore} from 'redux';
import reducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';



const initialState = {
 currentLang: "English",
 products: [],
 productsDistribution: [],
 totalPrice: 0.00,
 currentAmountPerProduct:0,
 currentCategory: null,
 addresses: [
     {
     id: '_' + Math.random().toString(36).substr(2, 9),
     title: "Home",
     address: "27 Street, 2569 Heritage Road Visalia, CA 93291"
    },
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Office",
        address: "33 Baker Street, Crescent Road, CA 65746 "
       }
  ],
  contacts: [
    {
    id: '_' + Math.random().toString(36).substr(2, 9),
    title: 'Primary',
    num: '202-555-0191'
    },
    {
     id: '_' + Math.random().toString(36).substr(2, 9),
     title: 'Secondary',
     num: '202-555-0701'
    }
],
 creditCards: [
     {
         img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAOCAYAAAB+UA+TAAAEhklEQVRIidWVXWxUVRSFv3XntkBpYUZqKQ0tqVgpPyp/wohEkBBMNKJGQ3wwhF8fTIQHxCCUONopiJEYNTFRQw3+oOIT6pORiDxACzEoodCIRmyLEIl2qKPT6cy924e5tLRTEI01cSf35uass9de69xz9hHAiLmx8cMU+kbSdQwIg04ZL3Y21W0biP2fwgEowJk/mEkAQQTREI42rPhvpf274eRezuS/nCn/riFXM4ThAsih16jTk8LJ9uRNzIwpvZmYOcTkD0YUjtbvk7S0/6h91tnl3UdLLJ/wWuPt8yPJZM4hSi7jbUF6h5WVO66a23huCmRfwzjiBIlTLmFOJo3jZfKedE3NDKra41filFgEYNhRsJZgdElklPvYPzYJkMneEphMAV8Cp0FTMZ5nd8dNV0/OzgQWICt2YG/IUG2vYN/Lm+6HXFIzbgVTdDC6klmxUlAxQKLLW9R5eOs0M44DmFlOzKxY0eg58dksjLl/y6j8nDbjKKsqF+LTpyHjlwPw1s/lNP40k71W2D/ZAl9qdUvmfDdREMqNG8L6m5RD4p57obAQ4JfBtLiuG4ix87TEktyxo0R+TxiETK2RufHHTfaSRGG42z1DNP65xBrM6nxU5IjNZrySaKpbDxCJ1r+BtNawlxMondNKKwAhm4opVzhUcpxdbfuwdO7I/NZ+isb2TmAePjUYtQgwa3VD8vsakZc1b0SRAMwJkQ1H6Fq8GBsTCRaIg4MZ9aVaBwNRHI7WH8DLjEOqwkiRzX5KofsjpgzGCxKVwBoAHzttpjbEZsFDwPrwvPidGGsx2hN/DN+C2R4kMO6msf0AxrSg7CEs+TTSUrAzmHaDlgDzABg1vo1key0ICtxWV/Q1ouyY0ubOZQ8Muj3Bvsfx3hwMERZwqFhigUHa4KD59qwKQg0CTPZE4vDW1wHC0fhEiTmeEzqZPLTlRCQab0dUhm9rmI5vuw3zfdMyjm/8HT0yOSgyAZiA8SvifTw9RchvwUjjFNzFqnFnaDy7C/w2zH4APIwbwdIsr2hzzbHJIrcVsmPLUvn+7BzSftzCDSwv776C0VoQ5vNcornumcux8O3xnQCGjgGMnr89QtabYOAlD9WcCgjeAzbJ9feBqnzTtq7muib2Wohkxw0AOKHZrKj4qpe48WwlaBTiAiPL23Na/WkIkE7R1VGNo2EYxyB3vfT+Ua+8rOgyg0+yumrnYMby1kKqFeBLTfkgXyOmO9iecLT+XTzvfomxZnwLyzwA8/wPFHI2gaqAExeHZ3OLlTw/CQhhlu5nEkA9FzA3BVxPsuMjGjtaMFsfoCdxVEvuOLUCODImXcrNlpWW9RG5X1yLycBMNUbK8zLHBkK+shswPpSpAvEoPh8HUEtfurrMzAfrzmbsYQ7EsrlkrzoQ05xXc2V1N2YbAQ94ELNZiE9yhGrB/ODqsZMAikTrtxgUmOOkLq5e3oCCDpwcP5x1QccbylgYc8Pp0BGhGWa2LtG09dWhKKPer11tFUgdgDA6WF1ZORQFB0ZkbnwTDtsN9icO1y0eqjp/Anh31Sy27YKTAAAAAElFTkSuQmCC",
         num: '2349'
     },
     {
         img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAC2ElEQVQ4jYWUX2jbVRTHP+f+fvn9mqxJk9WmjemaNmQtKzrZmCDIVBjbQHBsCrKHUhUfHGPDwUBBQX0Yw4FPwqz4MvBhMnwQKfggE/tQ2Biyzf2nm2lX2y7d1ibt0qVNfr8cH3SlapMeuA/33u/3w7n3nnuEFXEH4jjmqIpsQ3ULIjHQnConQ+XqQDvM6E+4lZmmt8C8L9CL8hj4XYTLljAgffmrK5myDHfYq5hTiERZJVS1GN4mh5sPhD8Vkc7VNKA+6AnbnftE3sQHMAAjAesdFeuHWnAAEWk0MXtg8ZpXAw4gFpiPKouxb5dXstDqO2YMkYbaRmjuc7OBNpOWoOCm7HrSv8HKHrs/P2j7jjmyFhxLZxcueOkn08jOKqEtTl2LwgfAoAFem/nmex7t3gc/n8Pu7vmXcK57M+x4xW/osXgyvHnlUuwE954/C+s6/ge/vvQS91v6X9RT0ag9bkV6Nu18malIE5HuDOe37sb9+Eu8mzdo2/4Ckxevo+lky1JHO+JVeDgyykQJepqauPXd29zoeIPGrh04xavEkr3M+zHWhSNURr4QHDrN/fRmP/fHBNFUkumxKTa+/iqJriSlwjwbMu2EkglyQ8M81RKFcpnGjRlmhn5lffU2zyTm6HhuF60bUpSCvfx24Qpu4Ryjd7LEqxfBk6qdezqzIINnXd/zWZ9JEd+U4eF0ActxGf7lEq56OKUi5cUlHgwNs5BIkRkZxE4dZfRBkeaGKLnJHLOzBdzpH5nsOkY4YhGYzilB7sptx3yOyId1K8LW8dYjoeXLtqKGQJtV95FRhgP9+e0yBomKY7JrVZIV5XEgboUwEH8viAmbunyRyn67r3jGdMI9Rd6tnw54Bf3TTZtH8YOhNeGqnLb7imfgn5/cXfZPi/r7UM3XdtFeznqfSZDROmgfqscDDfn+5ZOs3F6t2Sk6hfJ1qFz96j/N7pDAs0AJ5XKtZvcX+dwJtfbM5ZQAAAAASUVORK5CYII=",
         num: '8724'
     },
     {
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAMCAYAAAAOCs/+AAADWklEQVQ4jXWUb2iVdRTHP+e5d14ns0V0zdHS+6cXNfpDtC6LCiIkQwxK0DLYeC7UC0NIYq0XvVkSIVr2orBC825IEHdkUSBrU1SoILFiyC5i995tTJxzgWW7G07vc3rx/J7n97jN8+r8+53v95zf+f1EB9gFbEaJY6VMhh3Szo3Qk+7rxtHNAHgygOq3xPgGAJUpqu52AFqLjayo5RHpRDUN0oRwHjhFxe22ECpk+/eBthvHGSr5niAqAHqUNdTZgfIeQoOJbZStDPlqMUa2NgWSNKceos69OPzkYzBE1d3I/ccSeFd+RgjAIqK/Usk/FZqZwmuIfB2Jz1DJrwksB0C2cEW28v6GQ+8MXp1bddnEHrdF5l4ISan+RtkdRbQtglryY9M9lpReAj4A/RTlLMq5W4nKW4vsJNnD9wVW9Po4UW47tm7P/hcvdL/7V8vqfy0xocvqzufGZ4mplkzwOevjY6rufpaT9f2PIZozeeMIKV93csAkmImFckOGZxdWkt27NzU9e0czAMliE+jLJuMakgz2yhJzpBSC2GY+JFPYRWuxcQmxmL5t86Q3EsmFJW85MOlWQCfnbyYa3IE3MlqkmabadpBg7w5S3nTdAD8anru2agSAurMb9D+DmEDkE1bMlUgfsbmth+5CeNVvREe43lgEbpqaTyxPzJdBgMELD2ce/GhPByJdZhoKsS8AWH+kBWgy/ilmts0CMNE1hhd/Bhi1EyGF1E+RKqwFIBF/k3CFnAIXt82j+qep1XF7Yh7DgXr+77UvITztW3qcSmcZgFh96eIHMtY5QmX8EdAelHlD7k4c5xU4GUd1pyXtTZAqPAty1eQ1su5w2/LElGF/OoDweqTzA1aPvEgxi3/3V6ttkV6PSn4fcMLW9eZIT2xB5B6bJ98Rk5MIz4euBsnBolcJwHj+HzJ9vwPtYVy5THXiBwsibf4PCKiZWLPzI819CdBzKJdAsqCbCBLr+gtx+XIJ3mJRyQF9S4n5nRyP/MggegB6vUhC5KuQUsSXBOkISQeKstuY/lqoTlN1W0D8m6HXIZOqIaxEuM3EADz5npj3ZGjXObgoYwb0NAALzigUY1D7A2UDQgxYAL2IMorKZ4y5Q6T7d4LnnxE5akmB33ShH3gAZQHgf/VSJw5mgGMuAAAAAElFTkSuQmCC",
        num: '4535'
     },
    // },
    // {
    //     img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAMCAYAAAAOCs/+AAADWklEQVQ4jXWUb2iVdRTHP+e5d14ns0V0zdHS+6cXNfpDtC6LCiIkQwxK0DLYeC7UC0NIYq0XvVkSIVr2orBC825IEHdkUSBrU1SoILFiyC5i995tTJxzgWW7G07vc3rx/J7n97jN8+r8+53v95zf+f1EB9gFbEaJY6VMhh3Szo3Qk+7rxtHNAHgygOq3xPgGAJUpqu52AFqLjayo5RHpRDUN0oRwHjhFxe22ECpk+/eBthvHGSr5niAqAHqUNdTZgfIeQoOJbZStDPlqMUa2NgWSNKceos69OPzkYzBE1d3I/ccSeFd+RgjAIqK/Usk/FZqZwmuIfB2Jz1DJrwksB0C2cEW28v6GQ+8MXp1bddnEHrdF5l4ISan+RtkdRbQtglryY9M9lpReAj4A/RTlLMq5W4nKW4vsJNnD9wVW9Po4UW47tm7P/hcvdL/7V8vqfy0xocvqzufGZ4mplkzwOevjY6rufpaT9f2PIZozeeMIKV93csAkmImFckOGZxdWkt27NzU9e0czAMliE+jLJuMakgz2yhJzpBSC2GY+JFPYRWuxcQmxmL5t86Q3EsmFJW85MOlWQCfnbyYa3IE3MlqkmabadpBg7w5S3nTdAD8anru2agSAurMb9D+DmEDkE1bMlUgfsbmth+5CeNVvREe43lgEbpqaTyxPzJdBgMELD2ce/GhPByJdZhoKsS8AWH+kBWgy/ilmts0CMNE1hhd/Bhi1EyGF1E+RKqwFIBF/k3CFnAIXt82j+qep1XF7Yh7DgXr+77UvITztW3qcSmcZgFh96eIHMtY5QmX8EdAelHlD7k4c5xU4GUd1pyXtTZAqPAty1eQ1su5w2/LElGF/OoDweqTzA1aPvEgxi3/3V6ttkV6PSn4fcMLW9eZIT2xB5B6bJ98Rk5MIz4euBsnBolcJwHj+HzJ9vwPtYVy5THXiBwsibf4PCKiZWLPzI819CdBzKJdAsqCbCBLr+gtx+XIJ3mJRyQF9S4n5nRyP/MggegB6vUhC5KuQUsSXBOkISQeKstuY/lqoTlN1W0D8m6HXIZOqIaxEuM3EADz5npj3ZGjXObgoYwb0NAALzigUY1D7A2UDQgxYAL2IMorKZ4y5Q6T7d4LnnxE5akmB33ShH3gAZQHgf/VSJw5mgGMuAAAAAElFTkSuQmCC",
    //     num: '4585'
    // },   
   ],
   orderSum: {
       address: "",
       time: ""
   },
   searchRes:{
       searchTerm : "",
       res: ""
   } 
}


export const initializeStore = (state = initialState)=> {
    return createStore(
        reducer,
        state,
        composeWithDevTools()
    )
}