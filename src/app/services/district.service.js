import httpService from './http.service'

const districtEndpoint = 'districts/'

const districtService = {
  fetchAll: async () => {
    const { data } = await httpService.get(districtEndpoint)
    return data
  },
}

export default districtService
