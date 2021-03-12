import { create, HEADERS } from 'apisauce'
import { ApiUrl } from '../../config'

// Create our ApiSauce instance
const api = create({
  baseURL: ApiUrl
})

// Configuration
export const setHeaders = (opts: HEADERS) => api.setHeaders(opts)
export const setURL = (url: string) => api.setBaseURL(url)
export const setToken = (token: string) => api.setHeader('Authorization', `Bearer ${token}`)

