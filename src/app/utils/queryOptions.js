import queryString from 'query-string'

export function toQueryOptions(value) {
  Object.keys(value).map((key) => {
    const field = value[key]

    if (typeof field === 'object') {
      value[key] = JSON.stringify(field)
    }
  })

  return queryString.stringify(value)
}

export function fromQueryOptions(search) {
  search = queryString.parse(search, { arrayFormat: 'comma' })

  const newValue = {}
  Object.keys(search).forEach((key) => {
    // console.group('fromQueryOptions:')
    // console.log('KEY:', key)
    // console.log('search[key]:', search[key])
    // console.groupEnd()

    const field = search[key]

    if (typeof field === 'string') {
      if (field.includes('[') && field.includes(']')) {
        newValue[key] = JSON.parse(field)
      }
    } else if (Array.isArray(field) && field !== '') {
      newValue[key] = JSON.parse(field)
    } else {
      newValue[key] = field
    }
  })

  return newValue
}
