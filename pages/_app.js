/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import '../styles/globals.css';

export default function Myapp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

Myapp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape.isRequired,
};
