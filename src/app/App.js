import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdsPage from './components/ui/adsPage'
import Main from './layouts/main'

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/ads' component={AdsPage} />
        <Route path='/' exact component={Main} />
      </Switch>
    </>
  )
}

export default App
