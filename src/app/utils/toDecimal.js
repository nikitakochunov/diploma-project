// Округление числа до десятых долей
// и приведение числа вида (1.2) к виду (1,2)

export function toDecimal(num) {
  return num.toFixed(1).toString().split('.').join(',')
}
