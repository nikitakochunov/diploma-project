import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../api'
import AdPage from '../components/pages/adPage/'
import AdsListPage from '../components/pages/adsListPage/'
import { useAds } from '../hooks/useAds'
import { fromQueryOptions } from '../utils/queryOptions'

const Ads = ({ location }) => {
  const search = fromQueryOptions(location.search)
  const { adId } = useParams()

  // const [ads, setAds] = useState([])
  const { getAd } = useAds()

  // useEffect(() => {
  //   api.ads.fetchAll().then((data) => setAds(data))
  // }, [])

  const ad = getAd(adId)

  return (
    <>
      {adId && ad ? <AdPage ad={ad} /> : <AdsListPage searchOptions={search} />}
    </>
  )
}

export default Ads
