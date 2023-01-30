import Container from '../common/container'
import React from 'react'
import { PrimaryButton, SecondaryButton } from '../common/buttons'
import { ChatBubbleIcon, HeartIcon } from '../icons'
import Logo from './logo'

const Header = () => {
  return (
    <div className='border-b-[1px]'>
      <Container>
        <div className='flex flex-row items-center py-2'>
          <div className='basis-1/4'>
            <Logo />
          </div>
          <div className='basis-3/4 font-bold flex flex-row items-center justify-end space-x-4'>
            <div>
              <button className='text-center'>
                <ChatBubbleIcon />
              </button>
            </div>
            <div>
              <button className='text-center'>
                <HeartIcon />
              </button>
            </div>
            <div>
              <PrimaryButton>+ Разместить объявление</PrimaryButton>
            </div>
            <div>
              <SecondaryButton>Вход</SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
