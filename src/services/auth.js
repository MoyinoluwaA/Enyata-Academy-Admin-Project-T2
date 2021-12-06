import axios from 'axios'
import { baseUrl } from '../helpers/variables'

const AuthService = () => {
    const loginAdmin = async admin => {
        const response = await axios.post(`${ baseUrl }/users/admin/login`, admin)
        return response.data
    }

    return {
<<<<<<< HEAD
        verifyAdmin,
        loginAdmin,
=======
        loginAdmin
>>>>>>> 14442ab47884360d62a28143c360f34091425767
    }
}

export default AuthService()
