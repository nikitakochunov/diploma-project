import React from 'react'
import ButtonLayout from './buttonLayout'

const SecondaryButton = ({ children, onClick }) => {
  return (
    <ButtonLayout
      className='bg-mainColor-100 text-mainColor-500 hover:bg-mainColor-200'
      onClick={onClick}
    >
      {children}
    </ButtonLayout>
  )
}

export default SecondaryButton
