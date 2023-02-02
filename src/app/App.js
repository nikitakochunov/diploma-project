import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Ads from './layouts/ads'
import Landlords from './layouts/landlords'
import Main from './layouts/main'

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/ads/:adId?' component={Ads} />
        <Route path='/landlords/:landlordId?' component={Landlords} />
        <Route path='/' exact component={Main} />
      </Switch>
    </>
  )
}

export default App
