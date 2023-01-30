import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Ads from './layouts/ads'
import Main from './layouts/main'

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/ads/:adId?' component={Ads} />
        <Route path='/' exact component={Main} />
      </Switch>
    </>
  )
}

export default App
