import React from 'react'
import ReactDOM from 'react-dom'
import Explanation from './explanation';
import Layout from '../layout/layout';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Layout>
        <Explanation />
      </Layout>,
    document.body.appendChild(document.createElement('div')),
  )
})