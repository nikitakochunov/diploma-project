import React, { useEffect, useState } from 'react'
import api from '../../../api'
import Container from '../../common/container'
import Loader from '../../common/loader'
import Title from '../../common/title'
import Wrapper from '../../common/wrapper'
import AdsList from '../../ui/adsList'
import Avatar from '../../ui/avatar'
import Header from '../../ui/header'
import Rating from '../../ui/rating'

const LandlordPage = ({ landlord }) => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    api.ads.fetchAll().then((data) => setAds(data))
  }, [])

  const lanlordAds = ads.filter((ad) => ad.landlord_value === landlord.value)

  return (
    <>
      <Header />

      {landlord ? (
        <Container>
          <div className='flex flex-row space-x-4'>
            <div className='basis-3/12'>
              <div className='sticky top-10'>
                <Wrapper>
                  <div className='flex flex-col space-y-2'>
                    <div>
                      <Avatar className='w-28 h-28' />
                    </div>

                    <div>
                      <div className='flex flex-col space-y-1'>
                        <div>
                          <Title>{landlord.name}</Title>
                        </div>
                        <div>
                          <Rating rating={landlord.rating} />
                        </div>
                        <div>Зарегистрирован {landlord.registrationDate}</div>
                      </div>
                    </div>
                  </div>
                </Wrapper>
              </div>
            </div>
            <div className='basis-9/12'>
              <Wrapper>
                <div className='flex flex-col space-y-4'>
                  <div>
                    <Title>Объявления</Title>
                  </div>
                  <div>
                    <AdsList ads={lanlordAds} isCol={false} />
                  </div>
                </div>
              </Wrapper>
            </div>
          </div>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default LandlordPage
