export const ads = [
  {
    value: '4a8d79f85f90',
    name: 'Квартира 1',
    price: 12345,
    address: {
      metro: { value: 'avtovo' },
      district: { value: 'kirovskiy' },
      text: 'Проспект Стачек, дом 88',
    },
    description: 'Хорошая квартира в общежитии',
    date: '26.01.2023',
  },
  {
    value: 'b433a9d13475',
    name: 'Квартира 2',
    price: 100000,
    address: {
      metro: { value: 'veteranov' },
      district: { value: 'krasnoselskiy' },
      text: 'Авангардная улица, дом 1',
    },
    description: 'Хорошая квартира рядом с больницей',
    date: '26.01.2023',
  },
  {
    value: '4368a0dd8467',
    name: 'Квартира 3',
    price: 100000,
    address: {
      metro: { value: 'moskovskaya' },
      district: { value: 'moskovskiy' },
      text: 'Варшавская улица, дом 5',
    },
    description: 'Хорошая квартира',
    date: '26.01.2023',
  },
  {
    value: '67447985a58e',
    name: 'Квартира 4',
    price: 100000,
    address: {
      metro: { value: ['narvskaya', 'sennaya'] },
      district: { value: 'admiralteyskiy' },
      text: 'Площадь Репина, дом 1',
    },
    description: 'Хорошая квартира рядом с университетом',
    date: '26.01.2023',
  },
  {
    value: '4be3d462eb61',
    name: 'Квартира 5',
    price: 100000,
    address: {
      metro: { value: ['tehnologicheskiy-1', 'tehnologicheskiy-2'] },
      district: { value: 'admiralteyskiy' },
      text: 'Измайловский проспект, дом 5',
    },
    description: 'Хорошая квартира рядом с Фонтанкой',
    date: '26.01.2023',
  },
  {
    value: '78f7f38b073f',
    name: 'Квартира 6',
    price: 100000,
    address: {
      metro: { value: ['petrogradskaya', 'chkalovskaya'] },
      district: { value: 'petrogradskiy' },
      text: 'Чкаловский проспект, 52',
    },
    description: 'Хорошая квартира рядом с ничем',
    date: '26.01.2023',
  },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(ads)
    }, 1000)
  })

export default {
  fetchAll,
}
