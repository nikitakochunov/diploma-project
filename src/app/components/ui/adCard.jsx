import React, { useEffect, useState } from 'react'
import api from '../../api'
import { useAddress } from '../../hooks/useAddress'
import TextMuted from '../common/textMuted'
import Title from '../common/title'
import Wrapper from '../common/wrapper'
import MetroStationWrapper from './metroStationWrapper'

const AdCard = ({ data, onClick, isCol = true }) => {
  const { address } = data

  // const [metroStations, setMetroStations] = useState([])
  // const [districts, setDistricts] = useState([])
  const { metroStations, districts, getMetroStation, getDistrict } =
    useAddress()

  // useEffect(() => {
  //   api.metroStations.fetchAll().then((data) => setMetroStations(data))
  //   api.districts.fetchAll().then((data) => setDistricts(data))
  // }, [])

  const handleClick = () => {
    onClick(data.value)
  }

  const getMetroStations = (value) => {
    // if (metroStations.length > 0) {
    return value.map((val) => {
      const metroStation = getMetroStation(val)

      return (
        <MetroStationWrapper
          {...metroStation}
          // color={metroStation.color}
          // label={metroStation.label}
          key={metroStation.value}
        />
      )
    })

    // }
    // return '...'
  }

  const districtText = getDistrict(address.district.value).label + ' район'

  return isCol ? (
    <div className={'hover:shadow-lg '} role='button' onClick={handleClick}>
      <Wrapper>
        <div className='flex flex-row space-x-4'>
          <div className='basis-4/12 flex flex-row flex-wrap'>
            <div className='border-[1px] basis-full bg-mainColor-300'></div>
            <div className='border-[1px] basis-1/2 bg-mainColor-200'></div>
            <div className='border-[1px] basis-1/2 bg-mainColor-200'></div>
          </div>
          <div className='basis-8/12 flex flex-col space-y-4'>
            <div>
              <Title>{data.name}</Title>
            </div>
            <div className=''>
              <div className='ml-3.5 mb-1'>
                {getMetroStations(address.metro.value)}
              </div>
              <TextMuted>{districtText + ', ' + address.text}</TextMuted>
            </div>
            <div>
              <Title>{data.rent} ₽ в месяц</Title>
            </div>
            <div className=''>
              <p>{data.description}</p>
            </div>
            <div className='self-end'>
              <TextMuted>{data.date}</TextMuted>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  ) : (
    <div className='basis-4/12 px-2 py-2'>
      <div
        className='hover:shadow-lg h-full'
        role='button'
        onClick={handleClick}
      >
        <Wrapper>
          <div className='flex flex-col space-y-1 h-full'>
            <div className='basis-36'>
              <div className='bg-mainColor-300 h-full'></div>
            </div>
            <div>
              <div className='flex flex-col space-y-1'>
                <div>
                  <Title>{data.name}</Title>
                </div>
                <div className=''>
                  <div className='ml-3.5'>
                    {getMetroStations(address.metro.value)}
                  </div>
                </div>
                <div>
                  <Title>{data.rent} ₽ в месяц</Title>
                </div>
                <div className='self-start'>
                  <TextMuted>{data.date}</TextMuted>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  )
}

export default AdCard
