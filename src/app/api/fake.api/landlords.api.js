export const landlords = [
  {
    value: '28981787',
    name: 'Путь Владимиров',
    rating: 3.5,
    registrationDate: '13.01.2023',
    ads: ['4a8d79f85f90', '78f7f38b073f'],
  },
  {
    value: '57e15129',
    name: 'Сталь Иосифф',
    rating: 4,
    registrationDate: '13.01.2023',
    ads: ['b433a9d13475', '4368a0dd8467', '67447985a58e'],
  },
  {
    value: 'f9b3fcb7',
    name: 'Хрущ Никитич',
    rating: 5,
    registrationDate: '13.01.2023',
    ads: ['4be3d462eb61', '78f7f38b073f'],
  },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(landlords)
    }, 1000)
  })

export default {
  fetchAll,
}
