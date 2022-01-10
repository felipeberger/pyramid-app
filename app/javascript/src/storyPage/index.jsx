import React from 'react'
import ReactDOM from 'react-dom'
import Layout from '../layout/layout';
import StoryPage from './storyPage'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
      <Layout>
        <StoryPage storyId={data.storyId} />
      </Layout>,
    document.body.appendChild(document.createElement('div'))
  )
})