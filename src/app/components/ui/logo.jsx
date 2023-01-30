import React from 'react'
import { useHistory } from 'react-router'

const Logo = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div className='flex flex-col cursor-pointer pl-4' onClick={handleClick}>
      <h1 className='font-bold text-5xl text-mainColor-600'>NK</h1>
      <span className='italic text-xs text-neutral-500'>Аренда жилья</span>
    </div>
  )
}

export default Logo
