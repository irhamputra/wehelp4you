import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import "../firebase/config";

import { makeStore } from "../store";
import Layout from "../components/Layout";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
