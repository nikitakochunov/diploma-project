import React, { useEffect, useState } from 'react'
import api from '../../../api'
import AdsList from '../../ui/adsList'
import Container from '../../common/container'
import Header from '../../ui/header'
import Loader from '../../common/loader'
import DirectionSwitcher from '../../ui/directionSwitcher'
import FailMessage from '../../common/failMessage'
import { useAds } from '../../../hooks/useAds'

const AdsListPage = ({ searchOptions }) => {
  console.log('searchOptions', searchOptions)

  // const [ads, setAds] = useState([])
  const { ads, isLoading } = useAds()

  const [direction, setDirection] = useState('col')

  // useEffect(() => {
  //   api.ads.fetchAll().then((data) => setAds(data))
  // }, [])

  const handleClick = ({ currentTarget }) => {
    const { value } = currentTarget

    if (value === direction) return

    if (['row', 'col'].includes(value)) {
      setDirection(value)
    }
  }

  const filteredAds = ads
    .filter((ad) => {
      // Фильтрация по варианту количества комнат

      const { rooms } = searchOptions
      if (!rooms?.length) return true

      return rooms.includes(String(ad.about.flat.rooms))
    })
    .filter((ad) => {
      // Фильтрация по стоимости аренды

      if (!searchOptions.rent) return true

      const { from, to } = searchOptions.rent

      const isHigher = from ? from <= ad.rent : true
      const isLower = to ? to >= ad.rent : true

      return isHigher && isLower
    })
    .filter((ad) => {
      // Фильтрация по адресу

      const { address } = searchOptions

      if (!address) return true

      const adAddressValue = ad.address[address.type].value

      if (Array.isArray(adAddressValue)) {
        return adAddressValue.includes(address.value)
      }

      return address.value === adAddressValue
    })

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {/* <Header /> */}

      <Container>
        {filteredAds.length > 0 ? (
          <>
            <div className='mb-4'>
              <DirectionSwitcher
                onClick={handleClick}
                currentDirection={direction}
              />
            </div>

            <div className='flex flex-col'>
              {/* <SelectionForm /> */}
              <AdsList ads={filteredAds} isCol={direction === 'col'} />
            </div>
          </>
        ) : (
          <FailMessage />
        )}
      </Container>
    </>
  )
}

export default AdsListPage
