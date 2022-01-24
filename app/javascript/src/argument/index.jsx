import React from 'react'
import ReactDOM from 'react-dom'
import Layout from '../layout/layout';
import Argument from './argument'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Layout>
        <Argument />
      </Layout>,
    document.body.appendChild(document.createElement('div')),
  )
})