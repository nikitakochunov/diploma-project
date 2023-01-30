import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../api'
import AdPage from '../components/ui/adPage/'
import AdsListPage from '../components/ui/adsListPage/'

const Ads = () => {
  const { adId } = useParams()

  const [ads, setAds] = useState([])

  useEffect(() => {
    api.ads.fetchAll().then((data) => setAds(data))
  }, [])

  const ad = ads.find((ad) => ad.value === adId)

  return <>{adId ? <AdPage ad={ad} /> : <AdsListPage />}</>
}

export default Ads
