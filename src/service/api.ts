import axios from 'axios'

const dev = true
const env = dev ? 'http://localhost:5000' : 'https://icoffee.onrender.com'

export const api = axios.create({
  baseURL: env,
})
