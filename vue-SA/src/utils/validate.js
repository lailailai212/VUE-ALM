export function valdiate(str) {
  const reg = /^([1-9]{1})(\d{14}|\d{18})$/
  return reg.test(str)
}
