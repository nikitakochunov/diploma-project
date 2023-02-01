import React, { useEffect, useState } from 'react'
import api from '../../../api'
import Container from '../../common/container'
import TextMuted from '../../common/textMuted'
import Title from '../../common/title'
import Header from '../../ui/header'
import MetroStationWrapper from '../../ui/metroStationWrapper'
import { toDecimal } from '../../../utils/toDecimal'
import { PrimaryButton, SecondaryButton } from '../../common/buttons'
import Wrapper from '../../common/wrapper'
import Divider from '../../common/divider'
import LandlordCard from '../../ui/landlordCard'
import Loader from '../../common/loader'

const AdPage = ({ ad }) => {
  const [metroStations, setMetroStations] = useState([])
  const [districts, setDistricts] = useState([])
  const [landlords, setLandlords] = useState([])

  useEffect(() => {
    api.metroStations.fetchAll().then((data) => setMetroStations(data))
    api.districts.fetchAll().then((data) => setDistricts(data))
    api.landlords.fetchAll().then((data) => setLandlords(data))
  }, [])

  const getMetroStations = (metro) => {
    if (metroStations.length > 0) {
      if (Array.isArray(metro)) {
        const metroStationsArray = metro.map((station) => {
          const metroStation = metroStations.find(
            (metroStation) => metroStation.value === station
          )

          return (
            <MetroStationWrapper
              color={metroStation.color}
              label={metroStation.label}
              key={metroStation.value}
            />
          )
        })
        return metroStationsArray
        // return metroStationsArray.join(', ')
      } else {
        const metroStation = metroStations.find(
          (metroStation) => metroStation.value === metro
        )
        return (
          <MetroStationWrapper
            color={metroStation.color}
            label={metroStation.label}
            key={metroStation.value}
          />
        )
      }
    }
    return '...'
  }

  const getDistrict = (district) => {
    if (districts.length > 0) {
      return (
        districts.find((distr) => distr.value === district).label + ' район,'
      )
    }
    return ''
  }

  const getLandlordName = () => {
    if (landlords.length > 0) {
      return landlords.find((ll) => ll.value === ad.landlord_value)
    }
  }

  const landlord = getLandlordName()

  return (
    <>
      <Header />
      {ad ? (
        <Container>
          <div className='flex flex-row space-x-2 pb-4 items-start'>
            <div className='basis-8/12'>
              <Wrapper>
                <div className='flex flex-col space-y-4'>
                  <div className='flex flex-col space-y-4'>
                    <div>
                      <Title>{ad.name}</Title>
                    </div>
                    <div>
                      <p>
                        {getDistrict(ad.address.district.value)}
                        {' ' + ad.address.text}
                      </p>
                      <div className='ml-3.5 mb-1'>
                        {getMetroStations(ad.address.metro.value)}
                      </div>
                    </div>
                    <div>
                      <div className='flex flex-col h-96 space-y-1'>
                        <div className='basis-full border-[1px] bg-mainColor-400'></div>
                        <div className=''>
                          <div className='flex flex-row space-x-1 h-28'>
                            <div className='basis-4/12 bg-mainColor-300'></div>
                            <div className='basis-4/12 bg-mainColor-200'></div>
                            <div className='basis-4/12 bg-mainColor-100'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex flex-row justify-start space-x-10'>
                        <div className='basis-auto'>
                          <About
                            title={ad.about.flat.area.total + ' м²'}
                            type='Общая'
                          />
                        </div>
                        <div className='basis-auto'>
                          <About
                            title={
                              ad.about.flat.level.this +
                              ' из ' +
                              ad.about.flat.level.total
                            }
                            type='Этаж'
                          />
                        </div>
                        <div className='basis-auto'>
                          <About
                            title={
                              toDecimal(ad.about.house.ceilingHeight) + ' м'
                            }
                            type='Потолки'
                          />
                        </div>
                        <div className='basis-auto'>
                          <About
                            title={ad.about.house.year}
                            type='Год постройки'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className='flex flex-col space-y-2'>
                    <div>
                      <Title>Описание</Title>
                    </div>
                    <div>
                      <p>{ad.description}</p>
                    </div>
                    <div className='self-end'>
                      <TextMuted>{ad.date}</TextMuted>
                    </div>
                  </div>
                </div>
              </Wrapper>
            </div>

            <div className='basis-4/12'>
              <Wrapper>
                <div className='flex flex-col space-y-6'>
                  <div className='flex flex-col space-y-4'>
                    <div>
                      <Title>{ad.rent} ₽ в месяц</Title>
                    </div>
                    <div className='self-stretch'>
                      <div className='mb-2'>
                        <PrimaryButton>Показать телефон</PrimaryButton>
                      </div>
                      <SecondaryButton>Вход</SecondaryButton>
                    </div>
                  </div>

                  <Divider />
                  {landlord ? <LandlordCard data={landlord} /> : '...'}
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

export default AdPage

const About = ({ title, type }) => {
  return (
    <div className='flex flex-col'>
      <div>
        <Title>{title}</Title>
      </div>
      <div>
        <TextMuted>{type}</TextMuted>
      </div>
    </div>
  )
}
