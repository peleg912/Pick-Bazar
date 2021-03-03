import React from 'react';
import Head from 'next/head';

const myHead = (props)=> {
    return(
        <Head>
              <title>PickBazar</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"/>
             
              <link
               rel="stylesheet"
               href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
               integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
               crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/static/css/layout.css"/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
          </Head>


    )
}

export default myHead;