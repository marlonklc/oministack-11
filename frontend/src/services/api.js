import axios from 'axios'

const api = axios.create({
    baseURL: 'http://18.204.202.82:3333'
})

export default api