import Cookies from 'js-cookie'

export const config = () => {
    // API session
    const headers = {
        "accept": "application/json",
        "Authorization": `Bearer ${Cookies.get('session-auth-token')}`
    }

    return { headers }
}