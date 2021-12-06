import axios from 'axios'
import { baseUrl } from '../helpers/variables'

const AuthService = () => {
    const loginAdmin = async admin => {
        const response = await axios.post(`${ baseUrl }/users/admin/login`, admin)
        return response.data
    }

    return {
        loginAdmin
    }
}

export default AuthService()
