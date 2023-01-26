import React, { useEffect, useState } from 'react'
import api from '../api'
import { metroStations } from '../api/fake.api/metroStations.api'
import { bgColor } from '../constants/tailwindClasses'
import TextMuted from './common/textMuted'
import Title from './common/title'

const AdCard = ({ data }) => {
  const { address } = data

  const [metroStations, setMetroStations] = useState([])
  const [districts, setDistricts] = useState([])

  useEffect(() => {
    api.metroStations.fetchAll().then((data) => setMetroStations(data))
    api.districts.fetchAll().then((data) => setDistricts(data))
  }, [])

  const getMetroStations = (metro) => {
    if (metroStations.length > 0) {
      if (Array.isArray(metro)) {
        const metroStationsArray = metro.map((station) => {
          const metroStation = metroStations.find(
            (metroStation) => metroStation.value === station
          )

          return (
            <MetroBlock
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
          <MetroBlock
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

  return (
    <div
      className='flex flex-row space-x-4 p-4 border-2 border-neutral-100 h-auto hover:shadow-lg hover:border-neutral-200'
      role='button'
    >
      <div className='basis-4/12 flex flex-row flex-wrap'>
        <div className='border-2 basis-full'>1</div>
        <div className='border-2 basis-1/2'>2</div>
        <div className='border-2 basis-1/2'>3</div>
      </div>
      <div className='basis-8/12 flex flex-col space-y-4'>
        <div>
          <Title>{data.name}</Title>
        </div>
        <div className=''>
          <div className='ml-3.5 mb-1'>
            {getMetroStations(address.metro.value)}
          </div>
          <TextMuted>
            {getDistrict(address.district.value)}
            {' ' + address.text}
          </TextMuted>
        </div>
        <div>
          <Title>{data.price} ₽ в месяц</Title>
        </div>
        <div className=''>
          <p>{data.description}</p>
        </div>
        <div className='self-end'>
          <TextMuted>{data.date}</TextMuted>
        </div>
      </div>
    </div>
  )
}

export default AdCard

const MetroBlock = ({ label, color }) => {
  return (
    <div className='-ml-3.5 flex items-center space-x-2'>
      <div className={'h-1.5 w-1.5 rounded ' + bgColor[color]}></div>
      <div>{label}</div>
    </div>
  )
}
