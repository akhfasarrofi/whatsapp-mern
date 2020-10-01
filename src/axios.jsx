import axios from 'axios'

const instace = axios.create({
    baseURL: 'http://localhost:9000',
})

export default instace