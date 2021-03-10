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

    const path = ctx.asPath;

    return { pageProps, categories, path};
  }

  render() {
    const { Component, pageProps, categories, reduxStore, path} = this.props;
   
    return (
     <Provider store={reduxStore}>
       <MainLayout path={path}>
         <Component {...pageProps} categories={categories} path={path}/>
       </MainLayout>
     </Provider>
    );
  }
}

export default withReduxStore(MyApp);