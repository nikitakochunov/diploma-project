import React from 'react'

const SelectField = ({
  isGrouped,
  options,
  onClick,
  textIfEmpty,
  optionShape,
}) => {
  const isEmpty = isGrouped
    ? options.every((option) => option.options.length < 1)
    : options.length < 1

  const renderOptionInner = (optionInner, option) => {
    if (optionInner && typeof optionInner === 'function') {
      return optionInner(option)
    }
    return option.label
  }

  const handleClick = (textArray, type, value) => {
    const textValue = textArray.join(' ')
    onClick({ value: value, type: type, textValue: textValue })
  }

  if (options && !isEmpty) {
    return (
      <OptionsList>
        {!isGrouped
          ? options.map((option) => (
              <OptionsListItem key={option.value} onClick={onClick}>
                {option.label}
              </OptionsListItem>
            ))
          : options.map((group, index) => (
              <>
                <GroupLabel
                  key={group.label}
                  options={group.options}
                  label={group.label}
                />
                {group.options.map((option) => (
                  <OptionsListItem
                    key={option.value}
                    onClick={() => {
                      handleClick(
                        [group.text, option.label],
                        group.type,
                        option.value
                      )
                    }}
                  >
                    {renderOptionInner(group.optionInner, option)}
                  </OptionsListItem>
                ))}
              </>
            ))}
      </OptionsList>
    )
  }

  return (
    <div className='flex flex-col space-y-2 p-4'>
      <p className='font-bold'>{textIfEmpty[0]}</p>
      <p>{textIfEmpty[1]}</p>
    </div>
  )
}

export default SelectField

const OptionsList = ({ children }) => {
  return <ul className='flex flex-col'>{children}</ul>
}

const OptionsListItem = ({ onClick, children }) => {
  return (
    <li className='px-6 py-2 hover:bg-blue-100' role='button' onClick={onClick}>
      {children}
    </li>
  )
}

const GroupLabel = ({ options, label }) => {
  const isOptions = options.length > 0
  return isOptions ? (
    <label className='px-6 pt-2 font-serif text-slate-400'>{label}</label>
  ) : (
    ''
  )
}
