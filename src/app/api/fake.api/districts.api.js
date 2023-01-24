export const districts = [
  { value: 'admiralteyskiy', label: 'Адмиралтейский' },
  { value: 'vasileostrovskiy', label: 'Василеостровский' },
  { value: 'vyborgskiy', label: 'Выборгский' },
  { value: 'kalininskiy', label: 'Калининский' },
  { value: 'kirovskiy', label: 'Кировский' },
  { value: 'kolpinskiy', label: 'Колпинский' },
  { value: 'krasnogvardeyskiy', label: 'Красногвардейский' },
  { value: 'krasnoselskiy', label: 'Красносельский' },
  { value: 'kronshtadtskiy', label: 'Кронштадтcкий' },
  { value: 'kurortniy', label: 'Курортный' },
  { value: 'moskovskiy', label: 'Московский' },
  { value: 'nevskiy', label: 'Невский' },
  { value: 'petrogradskiy', label: 'Петроградский' },
  { value: 'petrodvortsoviy', label: 'Петродворцовый' },
  { value: 'primorskiy', label: 'Приморский' },
  { value: 'pushkinskiy', label: 'Пушкинский' },
  { value: 'frunzenskiy', label: 'Фрунзенский' },
  { value: 'tsentalniy', label: 'Центральный' },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(districts)
    }, 1000)
  })

export default {
  fetchAll,
}
