import React from 'react'
import ReactDOM from 'react-dom'
import Explanation from './explanation';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Explanation />,
    document.body.appendChild(document.createElement('div')),
  )
})