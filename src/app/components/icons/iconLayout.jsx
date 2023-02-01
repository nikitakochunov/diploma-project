import React from 'react'

const IconLayout = ({ children, fill, className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill ? fill : 'none'}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={
        'inline w-5 h-5 ' +
        (className
          ? className
          : 'text-neutral-500 transition-colors hover:text-neutral-900 duration-300')
      }
    >
      {children}
    </svg>
  )
}

export default IconLayout
