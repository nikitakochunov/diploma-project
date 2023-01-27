import React from 'react'
import Button from '../../common/button'
import Container from '../../common/container'
import { HomeIcon } from '../../icons'
import SelectionForm from './selectionForm'

const Selection = () => {
  return (
    <div className='py-4 px-2 bg-red-300 h-full'>
      <Container>
        <div className='mb-6'>
          <Button className='bg-neutral-900 text-white bg-opacity-50 flex items-center space-x-2'>
            <HomeIcon />
            <span>Санкт-Петербург</span>
          </Button>
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
