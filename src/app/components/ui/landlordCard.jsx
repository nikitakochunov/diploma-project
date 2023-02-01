import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './avatar'
import Rating from './rating'

const LandlordCard = ({ data }) => {
  return (
    <div className='flex flex-row items-start space-x-4'>
      <div>
        <Avatar />
      </div>
      <div>
        <div className='flex flex-col space-y-1'>
          <div>
            <Link
              className='transition-colors hover:text-blue-500 font-bold text-lg'
              to={`/landlords/${data.value}`}
            >
              {data.name}
            </Link>
          </div>
          <div>
            <Rating rating={data.rating} />
          </div>
          <div>Зарегистрирован {data.registrationDate}</div>
        </div>
      </div>
    </div>
  )
}

export default LandlordCard
