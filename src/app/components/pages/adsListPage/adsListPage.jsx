import React, { useEffect, useState } from 'react'
import api from '../../../api'
import AdsList from '../../ui/adsList'
import Container from '../../common/container'
import Header from '../../ui/header'
import { ColumnIcon, RowIcon } from '../../icons'
import Loader from '../../common/loader'

const AdsListPage = () => {
  const [ads, setAds] = useState([])
  const [showType, setShowType] = useState('col')

  useEffect(() => {
    api.ads.fetchAll().then((data) => setAds(data))
  }, [])

  const handleClick = ({ currentTarget }) => {
    const { value } = currentTarget

    if (value === showType) return

    if (value === 'row') {
      setShowType('row')
    } else if (value === 'col') {
      setShowType('col')
    }
  }

  const getShowTypeBtnClasses = (type) => {
    return (
      'p-2 hover:bg-mainColor-100 ' +
      (showType === type ? 'bg-mainColor-100' : '')
    )
  }

  const filteredAds = ads.filter((ad) => ad) //* Пока без фильтрации

  return (
    <>
      <Header />
      {filteredAds.length > 0 ? (
        <Container>
          <>
            <div className='mb-4'>
              <div className='flex flex-row'>
                <div className='border-[1px]'>
                  <button
                    type='button'
                    value='row'
                    className={getShowTypeBtnClasses('row')}
                    onClick={handleClick}
                  >
                    <RowIcon />
                  </button>
                </div>
                <div className='border-[1px]'>
                  <button
                    type='button'
                    value='col'
                    className={getShowTypeBtnClasses('col')}
                    onClick={handleClick}
                  >
                    <ColumnIcon />
                  </button>
                </div>
              </div>
            </div>

            <div className='flex flex-col pb-4'>
              {/* <SelectionForm /> */}
              <AdsList ads={filteredAds} isCol={showType === 'col'} />
            </div>
          </>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default AdsListPage
