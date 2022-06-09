import Cookies from 'js-cookie'

export const handleSuccess = (res: any) => {
    return {
        type: 'success',
        status: res.status,
        data: res.data
    }
}

export const handleError = (error: any) => {
    if (error && error.response && error.response.data && error.response.data.message) {

        if (error.response.data.message === 'JWT Token is missing!' || error.response.data.message === 'Token is not authorized!' || error.response.data.message === 'Invalid JWT Token!') {

            Cookies.remove('session-auth-token')
            Cookies.remove('master-auth-token')
            Cookies.remove('session-auth')
            window.localStorage.removeItem('user')
            window.location.href = '/login'

        }

        return {
            type: 'error',
            status: error.response.status,
            message: error.response.data.message
        }
    } else {
        return {
            type: 'error',
            status: 500,
            message: 'Ocorreu um erro, tente novamente mais tarde!'
        }
    }
}