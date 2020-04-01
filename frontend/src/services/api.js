import axios from 'axios'

const api = axios.create({
    baseURL: 'https://alb-mkc-2131479068.us-east-1.elb.amazonaws.com'
})

export default api