import React from 'react'
import ReactDOM from 'react-dom'
import Layout from '../layout/layout';
import Authenticate from './authenticate'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
      <Layout>
        <Authenticate />
      </Layout>,
    document.body.appendChild(document.createElement('div'))
  )
})