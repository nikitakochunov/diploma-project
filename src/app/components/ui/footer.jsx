import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import api from '../../api'
import { toQueryOptions } from '../../utils/queryOptions'
import { sortByAlphabet } from '../../utils/sortByAlphabet'
import Container from '../common/container'
import Subtitle from '../common/subtitle'
import RotateChevron from './RotateChevron'

const Footer = () => {
  const history = useHistory()

  const [metroStations, setMetroStations] = useState([])
  const [districts, setDistricts] = useState([])

  const [isCropped, setCropped] = useState({ metro: true, district: null })

  useEffect(() => {
    api.metroStations.fetchAll().then((data) => setMetroStations(data))
    api.districts.fetchAll().then((data) => setDistricts(data))
  }, [])

  const handleClick = (value) => {
    console.log('submitted value from footer', { address: value })

    history.push('/ads?' + toQueryOptions({ address: value }))
  }

  const handleMoreClick = (type) => {
    setCropped((prevState) => {
      return { ...prevState, [type]: !prevState[type] }
    })
  }

  const croppedMetroStations = isCropped.metro
    ? metroStations.slice(0, 19)
    : metroStations

  const lists = [
    {
      label: 'Квартиры у метро',
      type: 'metro',
      array: sortByAlphabet(croppedMetroStations),
    },
    {
      label: 'Квартиры в районе',
      type: 'district',
      array: sortByAlphabet(districts),
    },
  ]

  return (
    <div className='border-t-[1px] p-4'>
      <Container>
        <div className='flex flex-col space-y-4'>
          {lists.map((list) => {
            const { type } = list

            const moreButtonOptions =
              isCropped[type] !== null
                ? {
                    needMoreButton: true,
                    isCropped: isCropped[type],
                    onMoreClick: () => handleMoreClick(type),
                  }
                : {}

            return (
              <List {...list} onClick={handleClick} {...moreButtonOptions} />
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default Footer

const List = ({ label, type, array, onClick, needMoreButton, ...rest }) => {
  return (
    <div>
      {array.length > 0 ? (
        <>
          <Subtitle>{label}</Subtitle>

          <div className='flex flex-row flex-wrap -mx-2 mb-2 transition-all'>
            {array.map((item) => {
              return (
                <div
                  className='basis-1/5 px-2 py-1 rounded hover:bg-mainColor-200 transition-all duration-100'
                  key={item.value}
                >
                  <div
                    role='button'
                    onClick={() =>
                      onClick({
                        type: type,
                        value: item.value,
                      })
                    }
                    className=' text-[14px]'
                  >
                    {item.label}
                  </div>
                </div>
              )
            })}
          </div>

          {needMoreButton ? <MoreButton {...rest} /> : ''}
        </>
      ) : (
        ''
      )}
    </div>
  )
}

const MoreButton = ({ isCropped, onMoreClick }) => {
  return (
    <div
      className='w-auto transition-colors bg-mainColor-100 hover:bg-mainColor-200 text-center rounded py-1'
      role='button'
      onClick={onMoreClick}
    >
      <span className='mr-2'>{isCropped ? 'Развернуть' : 'Свернуть'}</span>

      <RotateChevron isActive={!isCropped} />
    </div>
  )
}
