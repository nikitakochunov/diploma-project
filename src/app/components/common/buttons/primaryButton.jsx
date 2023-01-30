import React from 'react'
import ButtonLayout from './buttonLayout'

const PrimaryButton = ({ children }) => {
  return (
    <ButtonLayout className='bg-mainColor-600 text-neutral-50'>
      {children}
    </ButtonLayout>
  )
}

export default PrimaryButton
