import React from 'react'
import App from 'next/app';
import Layout from '../components/_layout/layout'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import '../styles/globals.css'
import TaskProvider from '@/components/context/TaskProvider';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <TaskProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TaskProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp
