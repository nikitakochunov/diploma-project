import React from 'react'
import Button from '../common/button'
import { ChatBubbleIcon, HeartIcon } from '../icons'
import Logo from './logo'

const Header = () => {
  return (
    <div className='flex flex-row border-b-2 items-center border-blue-600 p-2'>
      <div className='basis-1/4'>
        <Logo />
      </div>
      <div className='basis-3/4 font-bold flex flex-row items-center justify-end space-x-4'>
        <button className='text-center'>
          <ChatBubbleIcon />
        </button>
        <button className='text-center'>
          <HeartIcon />
        </button>
        <Button
          className='bg-blue-600 text-neutral-50 hover:bg-blue-700'
          text='+ Разместить объявление'
        />
        <Button
          className='bg-blue-100 text-blue-600 hover:bg-blue-200'
          text='Вход'
        />
      </div>
    </div>
  )
}

export default Header
