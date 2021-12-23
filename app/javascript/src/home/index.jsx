import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home';
import Layout from '../layout/layout';
import { Provider } from 'react-redux';
import { store } from '../../global_state/store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})