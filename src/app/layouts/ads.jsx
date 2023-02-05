import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../api'
import AdPage from '../components/pages/adPage/'
import AdsListPage from '../components/pages/adsListPage/'
import { fromQueryOptions } from '../utils/queryOptions'

const Ads = ({ location }) => {
  const search = fromQueryOptions(location.search)
  const { adId } = useParams()

  const [ads, setAds] = useState([])

  useEffect(() => {
    api.ads.fetchAll().then((data) => setAds(data))
  }, [])

  const ad = ads.find((ad) => ad.value === adId)

  return (
    <>{adId ? <AdPage ad={ad} /> : <AdsListPage searchOptions={search} />}</>
  )
}

export default Ads
