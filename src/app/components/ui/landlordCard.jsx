import React from 'react'
import { Link } from 'react-router-dom'
import { useLandlords } from '../../hooks/useLandlords'
import Avatar from './avatar'
import Rating from './rating'

const LandlordCard = ({ value }) => {
  const { getLandlord, isLoading } = useLandlords()

  const landlord = getLandlord(value)

  return (
    <div className='flex flex-row items-start space-x-4'>
      <div>
        <Avatar id={landlord.avatar_value} />
      </div>
      <div>
        <div className='flex flex-col space-y-1'>
          <div>
            <Link
              className='transition-colors hover:text-blue-500 font-bold text-lg'
              to={`/landlords/${landlord.value}`}
            >
              {landlord.name}
            </Link>
          </div>
          <div>
            <Rating rating={landlord.rating} />
          </div>
          <div>Зарегистрирован {landlord.registrationDate}</div>
        </div>
      </div>
    </div>
  )
}

export default LandlordCard
