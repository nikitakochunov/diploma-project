import React from 'react'

const MetroStationWrapper = ({ label, color }) => {
  return (
    <div className='-ml-3.5 flex items-center space-x-2'>
      <div
        className={'h-1.5 w-1.5 rounded-full'}
        style={{ backgroundColor: color }}
      ></div>
      <div>{label}</div>
    </div>
  )
}

export default MetroStationWrapper
