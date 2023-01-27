import React from 'react'
import { bgColor } from '../../constants/tailwindClasses'

const MetroStationWrapper = ({ label, color }) => {
  return (
    <div className='-ml-3.5 flex items-center space-x-2'>
      <div className={'h-1.5 w-1.5 rounded ' + bgColor[color]}></div>
      <div>{label}</div>
    </div>
  )
}

export default MetroStationWrapper
