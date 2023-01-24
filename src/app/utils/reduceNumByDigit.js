import { toDecimal } from './toDecimal'

// Приведение многозначного числа к виду
// 'не больше трех разрядов + словесное описание выделенного разряда'
// Пример: 12340 -> 12,3

export function reduceNumByDigit(num) {
  const digits = [
    { value: 1000, text: 'тыс' },
    { value: 1000000, text: 'млн' },
    { value: 1000000000, text: 'млрд' },
  ]

  for (let i = 0; i < digits.length; i++) {
    if (i === digits.length - 1 && num > digits[i].value) {
      num = toDecimal(num / digits[i].value) + ' ' + digits[i].text
    }

    if (num > digits[i].value && num < digits[i + 1].value) {
      num = toDecimal(num / digits[i].value) + ' ' + digits[i].text
    }
  }

  return num
}
