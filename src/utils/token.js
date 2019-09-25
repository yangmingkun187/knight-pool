import cookies from 'js-cookie'

export function getToken () {
  return cookies.get('token')
}
export function getCsrfToken () {
  return cookies.get('csrftoken')
}

export function setToken (token) {
  return cookies.set('token', token, { expires: 7 })
}
