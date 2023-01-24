function checkIfNonDigit(value) {
  const reg = /\D+/g
  return reg.test(value)
}

export default checkIfNonDigit
