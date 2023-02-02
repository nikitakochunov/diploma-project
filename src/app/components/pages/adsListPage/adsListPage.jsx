import React, { useEffect, useState } from 'react'
import api from '../../../api'
import AdsList from '../../ui/adsList'
import Container from '../../common/container'
import Header from '../../ui/header'
import Loader from '../../common/loader'
import DirectionSwitcher from '../../ui/directionSwitcher'

const AdsListPage = () => {
  const [ads, setAds] = useState([])
  const [direction, setDirection] = useState('col')

  useEffect(() => {
    api.ads.fetchAll().then((data) => setAds(data))
  }, [])

  const handleClick = ({ currentTarget }) => {
    const { value } = currentTarget

    if (value === direction) return

    if (['row', 'col'].includes(value)) {
      setDirection(value)
    }
  }

  const filteredAds = ads.filter((ad) => ad) //* Пока без фильтрации

  return (
    <>
      <Header />
      {filteredAds.length > 0 ? (
        <Container>
          <div className='mb-4'>
            <DirectionSwitcher
              onClick={handleClick}
              currentDirection={direction}
            />
          </div>

          <div className='flex flex-col pb-4'>
            {/* <SelectionForm /> */}
            <AdsList ads={filteredAds} isCol={direction === 'col'} />
          </div>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default AdsListPage
