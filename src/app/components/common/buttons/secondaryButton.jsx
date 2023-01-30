import React from 'react'
import ButtonLayout from './buttonLayout'

const SecondaryButton = ({ children }) => {
  return (
    <ButtonLayout className='bg-mainColor-100 text-mainColor-500'>
      {children}
    </ButtonLayout>
  )
}

export default SecondaryButton
