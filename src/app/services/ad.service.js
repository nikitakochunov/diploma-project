import httpService from './http.service'

const adEndpoint = 'ads/'

const adService = {
  fetchAll: async () => {
    const { data } = await httpService.get(adEndpoint)
    return data
  },
}

export default adService
