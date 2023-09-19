import React from 'react'
import App from 'next/app';
import Layout from '../components/_layout/layout'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyle'
import theme from '../styles/theme'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp
