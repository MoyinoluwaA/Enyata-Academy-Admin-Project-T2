import axios from 'axios'
import { baseUrl } from '../helpers/variables'


const AuthService = () => {
    const verifyAdmin = async verifyToken => {
        const response = await axios.put(`${ baseUrl }/admin/verify?verifyToken=${verifyToken}`)
        return response.data
    }

    const loginAdmin = async admin => {
        const response = await axios.post(`${ baseUrl }/users/admin/login`, admin)
        return response.data
    }

    return {
        verifyAdmin,
        loginAdmin,
    }
}

export default AuthService()
