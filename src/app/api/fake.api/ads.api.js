export const ads = [
  {
    value: '4a8d79f85f90',
    name: 'Квартира 1',
    rent: 29990,
    address: {
      metro: { value: 'avtovo' },
      district: { value: 'kirovskiy' },
      text: 'Проспект Стачек, дом 88',
    },
    about: {
      flat: {
        rooms: 1,
        area: { total: 68, living: 56, kitchen: '' },
        level: { this: 14, total: 15 },
      },
      house: {
        year: 1900,
        ceilingHeight: 2.7,
      },
    },
    description:
      'Хорошая квартира в общежитии. Душ общий, работает по талонам.',
    date: '26.01.2023',
    landlord_value: '28981787',
  },
  {
    value: 'b433a9d13475',
    name: 'Квартира 2',
    rent: 13900,
    address: {
      metro: { value: 'veteranov' },
      district: { value: 'krasnoselskiy' },
      text: 'Авангардная улица, дом 1',
    },
    about: {
      flat: {
        rooms: 2,
        area: { total: 36, living: 27, kitchen: '' },
        level: { this: 1, total: 9 },
      },
      house: {
        year: 1910,
        ceilingHeight: 2.6,
      },
    },
    description:
      'Хорошая квартира рядом с больницей. Здесь я родился, здесь я лечился, здесь рожала моя жена, здесь я умру.',
    date: '26.01.2023',
    landlord_value: '57e15129',
  },
  {
    value: '4368a0dd8467',
    name: 'Квартира 3',
    rent: 9900,
    address: {
      metro: { value: 'moskovskaya' },
      district: { value: 'moskovskiy' },
      text: 'Варшавская улица, дом 5',
    },
    about: {
      flat: {
        rooms: 3,
        area: { total: 12, living: 9, kitchen: '' },
        level: { this: 2, total: 3 },
      },
      house: {
        year: 1920,
        ceilingHeight: 2.5,
      },
    },
    description:
      'Я черный риелтор, нужно срочно избавиться от квартиры. Кто же знал, что я споил и заставил подписаться в договоре о купле-продаже самого губернатора!',
    date: '26.01.2023',
    landlord_value: '57e15129',
  },
  {
    value: '67447985a58e',
    name: 'Квартира 4',
    rent: 61900,
    address: {
      metro: { value: ['narvskaya', 'sennaya'] },
      district: { value: 'admiralteyskiy' },
      text: 'Площадь Репина, дом 1',
    },
    about: {
      flat: {
        rooms: 4,
        area: { total: 43, living: 37, kitchen: '' },
        level: { this: 3, total: 5 },
      },
      house: {
        year: 1930,
        ceilingHeight: 2.4,
      },
    },
    description:
      'Хорошая квартира рядом с Кораблестроительным университетом и Адмиралтейскими верфями. Будешь инженером!',
    date: '26.01.2023',
    landlord_value: '57e15129',
  },
  {
    value: '4be3d462eb61',
    name: 'Квартира 5',
    rent: 14900,
    address: {
      metro: { value: ['tehnologicheskiy-1', 'tehnologicheskiy-2'] },
      district: { value: 'admiralteyskiy' },
      text: 'Измайловский проспект, дом 5',
    },
    about: {
      flat: {
        rooms: 1,
        area: { total: 67, living: 56, kitchen: '' },
        level: { this: 1, total: 2 },
      },
      house: {
        year: 1940,
        ceilingHeight: 2.3,
      },
    },
    description:
      'Ужасная квартира, ужасный хозяин, ужасные соседи, ужасный двор, ужасная улица, ужасный район, ужасный город. Но шаверма рядом — обожаю.',
    date: '26.01.2023',
    landlord_value: 'f9b3fcb7',
  },
  {
    value: '78f7f38b073f',
    name: 'Квартира 6',
    rent: 1900,
    address: {
      metro: { value: ['petrogradskaya', 'chkalovskaya'] },
      district: { value: 'petrogradskiy' },
      text: 'Чкаловский проспект, 52',
    },
    about: {
      flat: {
        rooms: 'studio',
        area: { total: 25, living: 15, kitchen: '' },
        level: { this: 10, total: 10 },
      },
      house: {
        year: 1950,
        ceilingHeight: 2.2,
      },
    },
    description:
      'Хорошая квартира рядом с ничем. Да, у меня закончилась фантазия. И что с этого?',
    date: '26.01.2023',
    landlord_value: '28981787',
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
