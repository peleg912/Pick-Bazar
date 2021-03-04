import React from 'react';

const creditCard = (props)=> {
    return(
        <li style={{flex: '1 1 auto', position: 'relative', width: '200px'}} >

        <label htmlFor="payment-card-179012" className="payment-cardstyle ">

        <input type="radio" id="payment-card-179012" name="Jhon Doe Smith" value="payment-card-179012" />

       <span className="payment-cardstyle-wrapper">

              <span className="card-logo">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAOCAYAAAB+UA+TAAAEhklEQVRIidWVXWxUVRSFv3XntkBpYUZqKQ0tqVgpPyp/wohEkBBMNKJGQ3wwhF8fTIQHxCCUONopiJEYNTFRQw3+oOIT6pORiDxACzEoodCIRmyLEIl2qKPT6cy924e5tLRTEI01cSf35uass9de69xz9hHAiLmx8cMU+kbSdQwIg04ZL3Y21W0biP2fwgEowJk/mEkAQQTREI42rPhvpf274eRezuS/nCn/riFXM4ThAsih16jTk8LJ9uRNzIwpvZmYOcTkD0YUjtbvk7S0/6h91tnl3UdLLJ/wWuPt8yPJZM4hSi7jbUF6h5WVO66a23huCmRfwzjiBIlTLmFOJo3jZfKedE3NDKra41filFgEYNhRsJZgdElklPvYPzYJkMneEphMAV8Cp0FTMZ5nd8dNV0/OzgQWICt2YG/IUG2vYN/Lm+6HXFIzbgVTdDC6klmxUlAxQKLLW9R5eOs0M44DmFlOzKxY0eg58dksjLl/y6j8nDbjKKsqF+LTpyHjlwPw1s/lNP40k71W2D/ZAl9qdUvmfDdREMqNG8L6m5RD4p57obAQ4JfBtLiuG4ix87TEktyxo0R+TxiETK2RufHHTfaSRGG42z1DNP65xBrM6nxU5IjNZrySaKpbDxCJ1r+BtNawlxMondNKKwAhm4opVzhUcpxdbfuwdO7I/NZ+isb2TmAePjUYtQgwa3VD8vsakZc1b0SRAMwJkQ1H6Fq8GBsTCRaIg4MZ9aVaBwNRHI7WH8DLjEOqwkiRzX5KofsjpgzGCxKVwBoAHzttpjbEZsFDwPrwvPidGGsx2hN/DN+C2R4kMO6msf0AxrSg7CEs+TTSUrAzmHaDlgDzABg1vo1key0ICtxWV/Q1ouyY0ubOZQ8Muj3Bvsfx3hwMERZwqFhigUHa4KD59qwKQg0CTPZE4vDW1wHC0fhEiTmeEzqZPLTlRCQab0dUhm9rmI5vuw3zfdMyjm/8HT0yOSgyAZiA8SvifTw9RchvwUjjFNzFqnFnaDy7C/w2zH4APIwbwdIsr2hzzbHJIrcVsmPLUvn+7BzSftzCDSwv776C0VoQ5vNcornumcux8O3xnQCGjgGMnr89QtabYOAlD9WcCgjeAzbJ9feBqnzTtq7muib2Wohkxw0AOKHZrKj4qpe48WwlaBTiAiPL23Na/WkIkE7R1VGNo2EYxyB3vfT+Ua+8rOgyg0+yumrnYMby1kKqFeBLTfkgXyOmO9iecLT+XTzvfomxZnwLyzwA8/wPFHI2gaqAExeHZ3OLlTw/CQhhlu5nEkA9FzA3BVxPsuMjGjtaMFsfoCdxVEvuOLUCODImXcrNlpWW9RG5X1yLycBMNUbK8zLHBkK+shswPpSpAvEoPh8HUEtfurrMzAfrzmbsYQ7EsrlkrzoQ05xXc2V1N2YbAQ94ELNZiE9yhGrB/ODqsZMAikTrtxgUmOOkLq5e3oCCDpwcP5x1QccbylgYc8Pp0BGhGWa2LtG09dWhKKPer11tFUgdgDA6WF1ZORQFB0ZkbnwTDtsN9icO1y0eqjp/Anh31Sy27YKTAAAAAElFTkSuQmCC" alt="card-card-179012"/>
              </span>

             <span className="CardNumTitle">Card Number</span>

            <span className="CardNumber">

               <span>****</span>
               <span>****</span>
               <span>****</span>
               <span className="card-number">2349</span>

            </span>
           
             <span className="cardstyle__Name">Jhon Doe Smith</span>
       </span>

           <span className="payment-cardstyle__DeleteButton">
               <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
           </span>

      </label>

      </li>
    )
}

export default creditCard;