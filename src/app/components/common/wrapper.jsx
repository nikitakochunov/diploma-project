import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className={'p-6 border-[1px] rounded h-full border-neutral-200 '}>
      {children}
    </div>
  )
}

export default Wrapper
