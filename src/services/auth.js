import axios from 'axios'
import { baseUrl } from '../helpers/variables'
import api from './access'

const AuthService = () => {
    const loginAdmin = async admin => {
        const response = await axios.post(`${ baseUrl }/users/admin/login`, admin)
        return response.data
    }

    const getAdminDetails = async () => {
        const response = await api.get('/users/admin/details')
        return response.data
    }

    return {
        loginAdmin,
        getAdminDetails
    }
}

export default AuthService()
