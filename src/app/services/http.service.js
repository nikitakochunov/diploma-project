import axios from 'axios'
// import { toast } from 'react-toastify'
import configFile from '../config.json'

axios.defaults.baseURL = configFile.apiEndpoint

axios.interceptors.request.use(
  function (config) {
    if (configFile.isFirebase) {
      const containSlash = /\/$/gi.test(config.url)
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + '.json'
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

const transformData = (data) => {
  return data ? Object.values(data) : []
}

axios.interceptors.response.use(
  (res) => {
    if (configFile.isFirebase) {
      res.data = { content: transformData(res.data) }
    }
    return res
  },
  function (error) {
    console.log('Interseptor')
    const { response } = error
    const isExpectedError =
      response && response.status >= 400 && response.status < 500
    if (!isExpectedError) {
      console.log(error)
      // toast.error('Something went wrong')
    }
    return Promise.reject(error)
  }
)

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}

export default httpService
