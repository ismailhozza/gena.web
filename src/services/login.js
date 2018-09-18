import axios from 'axios'

const BASE_URL = "http://localhost:3001"

let token = null

const login = async (credentials) => {
    const response = await axios.post(`${BASE_URL}/api/login`, credentials)
    return response.data
}

const setToken = (newToken) => token = `bearer ${newToken}`
const getToken = () => token

export {
    login, setToken, getToken
}