import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/ui/footer'
import Header from './components/ui/header'
import { AddressProvider } from './hooks/useAddress'
import { AdsProvider } from './hooks/useAds'
import { LandlordsProvider } from './hooks/useLandlords'
import Ads from './layouts/ads'
import Landlords from './layouts/landlords'
import Main from './layouts/main'

const App = () => {
  return (
    <>
      <Header />
      <AddressProvider>
        <AdsProvider>
          <LandlordsProvider>
            <Switch>
              <Route path='/ads/:adId?' component={Ads} />
              <Route path='/landlords/:landlordId?' component={Landlords} />
              <Route path='/' exact component={Main} />
            </Switch>
          </LandlordsProvider>
        </AdsProvider>
        <Footer />
      </AddressProvider>
    </>
  )
}

export default App
