import React from 'react'
import Container from '../../common/container'
import { HomeIcon } from '../../icons'
import SelectionForm from './selectionForm'

const Selection = () => {
  return (
    <div className='pt-6 pb-24 px-2 bg-mainColor-300 h-full'>
      <Container>
        <div className='mb-6'>
          <button className='p-2 rounded bg-neutral-900 text-white bg-opacity-50 flex items-center space-x-2'>
            <HomeIcon />
            <span>Санкт-Петербург</span>
          </button>
        </div>

        <h1 className='text-bold text-white text-3xl font-serif mb-6'>
          Cнять квартиру на длительный срок? <br />
          NK поможет Вам!
        </h1>

        <SelectionForm />
      </Container>
    </div>
  )
}

export default Selection
