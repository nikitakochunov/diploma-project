import React, { useEffect, useState } from 'react'
import api from '../../../api'
import AdsList from './adsList'
import Container from '../../common/container'
import Loading from '../../common/loading'
import Header from '../header'
import SelectionForm from '../selection/selectionForm'

const AdsPage = () => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    api.ads.fetchAll().then((data) => setAds(data))
  }, [])

  const filteredAds = ads.filter((ad) => ad) //* Пока без фильтрации

  return (
    <>
      <Header />
      <Container>
        {filteredAds.length > 0 ? (
          <div className='flex flex-col py-4'>
            {/* <SelectionForm /> */}
            <AdsList ads={filteredAds} />
          </div>
        ) : (
          <Loading>Ща-ща, погоди, братан...</Loading>
        )}
      </Container>
    </>
  )
}

export default AdsPage
