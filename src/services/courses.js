import axios from 'axios'

const BASE_URL = "http://localhost:3001"

const getAll = async (token) => {
    const config = {
        headers: { 'Authorization': `bearer ${token}` }
    }
    const response = await axios.get(`${BASE_URL}/api/course`, config)
    return response.data
}

export default {
    getAll
}