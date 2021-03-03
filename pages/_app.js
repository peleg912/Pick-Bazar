import React from 'react';
import App from 'next/app';
import MainLayout from '../components/layouts/mainLayout';
import categories from '../utills/categories';
import withReduxStore from '../store/hoc/withReduxStore';
import {Provider} from 'react-redux';

class MyApp extends App {

  static async getInitialProps({ Component, ctx}) {
    let pageProps = {};
    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }


    return { pageProps, categories};
  }

  render() {
    const { Component, pageProps, categories, reduxStore} = this.props;
   
    return (
     <Provider store={reduxStore}>
       <MainLayout>
         <Component {...pageProps} categories={categories} />
       </MainLayout>
     </Provider>
    );
  }
}

export default withReduxStore(MyApp);