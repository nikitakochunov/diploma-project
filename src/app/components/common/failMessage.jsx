import React from 'react'
import { useHistory } from 'react-router-dom'
import { SecondaryButton } from './buttons'
import Title from './title'

const FailMessage = () => {
  const history = useHistory()

  return (
    <div className='flex flex-col items-center mt-60 mb-60'>
      <div className='text-center mb-2'>
        <Title>К сожалению, по вашему запросу ничего не найдено.</Title>
        <p className='mt-2'>
          Проверьте корректность выбранных фильтров поиска или задайте новые
        </p>
      </div>
      <div>
        <SecondaryButton
          onClick={() => {
            history.goBack()
          }}
        >
          Перейти
        </SecondaryButton>
      </div>
    </div>
  )
}

export default FailMessage
