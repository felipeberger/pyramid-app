import React from 'react'
import ReactDOM from 'react-dom'
import Layout from '../layout/layout';
import { Provider } from 'react-redux';
import { store } from '../../global_state/store';
import StoryPage from './storyPage'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Layout>
        <StoryPage/>
      </Layout>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})