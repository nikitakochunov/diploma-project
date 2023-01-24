export function toDecimal(num) {
  return num.toFixed(1).toString().split('.').join(',')
}
