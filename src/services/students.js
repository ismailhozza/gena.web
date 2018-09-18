import axios from 'axios'

const BASE_URL = "http://localhost:3001"

const getAll = async (token) => {
    const config = {
        headers: { 'Authorization': `bearer ${token}` }
    }
    console.log(config)
    const response = await axios.get(`${BASE_URL}/api/student`, config)
    return response.data
}

const createNewStudent = async (content) => {
    const response = await axios.post(`${BASE_URL}/api/student`, { content, important: false })
    return response.data
}

export default {
    getAll, createNewStudent
}