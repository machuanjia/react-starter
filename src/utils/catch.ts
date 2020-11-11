/** @format */

const tokenKey: string = process.env.REACT_APP_ACCESS_TOKEN || 'pherusa_access_token'
export const getToken = () => localStorage.getItem(tokenKey)
export const setToken = (token: string) => localStorage.setItem(tokenKey, token)
export const removeToken = () => localStorage.removeItem(tokenKey)
