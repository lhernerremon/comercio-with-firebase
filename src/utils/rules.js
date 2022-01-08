const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const cellphonePattern = /^\+?1?\d{9,15}$/
const tarjetaregex = /^\d{12}$/

export const required = (value) => !!value || 'Este campo es necesario.'
export const email = (value) => emailPattern.test(value) || value === '' || 'Ingrese un correo electrónico válido.'
export const cellphone = (value) => cellphonePattern.test(value) || value === '' || 'Ingrese un número del formato +51987654321.'
export const maxLength = (maxLength) => (value) => value.length <= maxLength || `El campo no puede tener mas de ${maxLength} caracteres.`
export const minLength = (maxLength) => (value) => value.length >= maxLength || `El campo debe tener mas de ${maxLength} caracteres.`
export const max = (maxValue) => (value) => value.length >= maxValue || `El campo debe tener mas de ${maxValue} caracteres.`
export const min = (minValue) => (value) => value.length >= minValue || `El campo debe tener mas de ${minValue} caracteres.`

export const tarjeta = (value) => tarjetaregex.test(value) || value === '' || 'Ingrese un N° de tarjeta válido.'
