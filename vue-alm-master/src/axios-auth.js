/* eslint-disable */
import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true
})

instance.defaults.headers['Content-Type'] = 'application/xml'
instance.defaults.headers.post['Accept'] = 'application/xml'

export default instance
