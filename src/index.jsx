import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import RootComponent from './RootComponent'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(RootComponent)

if (module.hot) {
  module.hot.accept('./RootComponent', () => { render(RootComponent) })
}