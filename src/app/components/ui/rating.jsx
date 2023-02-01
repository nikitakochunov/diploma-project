import React from 'react'
import { toDecimal } from '../../utils/toDecimal'
import { StarIcon } from '../icons'

const Rating = ({ rating }) => {
  return (
    <>
      <div className='flex flex-row space-x-2 items-center'>
        <p className='font-bold'>{toDecimal(rating)}</p>
        <div className='flex flex-row'>
          {new Array(5).fill('').map((_, index) => (
            <StarIcon key={index} isFill={rating >= index + 1} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Rating
