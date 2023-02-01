import React from 'react'
import { useHistory } from 'react-router-dom'
import AdCard from './adCard'

const AdsList = ({ ads, isCol = true }) => {
  const history = useHistory()

  const getFlexClasses = () => {
    return isCol
      ? 'flex flex-col space-y-6'
      : 'flex flex-row flex-wrap items-stretch -m-2'
  }

  const handleClick = (value) => {
    history.push(`/ads/${value}`)
  }
  return (
    <div className={getFlexClasses()}>
      {ads.map((ad) => (
        <AdCard data={ad} key={ad.value} onClick={handleClick} isCol={isCol} />
      ))}
    </div>
  )
}

export default AdsList
