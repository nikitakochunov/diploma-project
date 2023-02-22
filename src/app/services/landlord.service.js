import httpService from './http.service'

const landlordEndpoint = 'landlords/'

const landlordService = {
  fetchAll: async () => {
    const { data } = await httpService.get(landlordEndpoint)
    return data
  },
}

export default landlordService
