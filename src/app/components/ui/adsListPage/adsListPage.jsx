import React, { useEffect, useState } from 'react'
import api from '../../../api'
import AdsList from './adsList'
import Container from '../../common/container'
import Loading from '../../common/loading'
import Header from '../header'
import { useHistory } from 'react-router'

const AdsListPage = () => {
  const history = useHistory()
  const [ads, setAds] = useState([])

  useEffect(() => {
    api.ads.fetchAll().then((data) => setAds(data))
  }, [])

  const filteredAds = ads.filter((ad) => ad) //* Пока без фильтрации

  const handleClick = (value) => {
    history.push(`/ads/${value}`)
  }

  return (
    <>
      <Header />
      <Container>
        {filteredAds.length > 0 ? (
          <div className='flex flex-col py-4'>
            {/* <SelectionForm /> */}
            <AdsList ads={filteredAds} onClick={handleClick} />
          </div>
        ) : (
          <Loading>Ща-ща, погоди, братан...</Loading>
        )}
      </Container>
    </>
  )
}

export default AdsListPage
