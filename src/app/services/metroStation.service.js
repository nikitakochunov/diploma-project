import httpService from './http.service'

const metroStationEndpoint = 'metroStations/'

const metroStationService = {
  fetchAll: async () => {
    const { data } = await httpService.get(metroStationEndpoint)
    return data
  },
}

export default metroStationService
