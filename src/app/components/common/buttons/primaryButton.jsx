import React from 'react'
import ButtonLayout from './buttonLayout'

const PrimaryButton = ({ children, onClick }) => {
  return (
    <ButtonLayout
      className='bg-mainColor-600 text-neutral-50 hover:bg-mainColor-800'
      onClick={onClick}
    >
      {children}
    </ButtonLayout>
  )
}

export default PrimaryButton
