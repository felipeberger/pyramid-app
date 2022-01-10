import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home';
import Layout from '../layout/layout';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Layout>
        <Home />
      </Layout>,
    document.body.appendChild(document.createElement('div')),
  )
})