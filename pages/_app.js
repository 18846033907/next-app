import App from 'next/app'
import React from 'react'
import { useStore } from '../store.js'
import { Provider } from 'react-redux'
import '../styles/globals.css'

export default function Myapp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

