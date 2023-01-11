import React from 'react'

const IconLayout = ({ children }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-5 h-5 text-neutral-500 hover:text-neutral-900'
    >
      {children}
    </svg>
  )
}

export default IconLayout
