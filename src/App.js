import React from 'react'
import { Provider } from 'mobx-react'
import MainContainer from './modules/MainContainer'
import Store from './store'

export default function App() {
  return (
    <Provider store={Store}>
      <MainContainer />
    </Provider>
  )
}
