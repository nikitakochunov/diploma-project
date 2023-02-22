import React from 'react'

const Avatar = ({ id, className }) => {
  return (
    <img
      // src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
      //   .toString(36)
      //   .substring(7)}.svg`}
      src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
      className={
        'rounded-full border-[1px] ' + (className ? className : 'w-16 h-16')
      }
      alt='avatar'
    />
  )
}

export default Avatar
