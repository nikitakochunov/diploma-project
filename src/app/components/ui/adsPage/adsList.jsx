import React from 'react'
import AdCard from './adCard'

const AdsList = ({ ads }) => {
  return (
    <div className='flex flex-col space-y-8'>
      {ads.map((ad) => (
        <AdCard data={ad} key={ad.value} />
      ))}
    </div>
  )
}

export default AdsList
