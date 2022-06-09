import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { openNotification } from '../../utils/notification'

interface AuthContextProps {
    user?: any
    loading?: boolean
    accessToken?: string
    login?: (email: String, password: String) => Promise<void>
    changePasswordAuth?: (password: String, reset_id: String) => Promise<void>
    forgotPasswordAuth?: (email: String,) => Promise<void>
    logout?: () => Promise<void>
    disabled?: boolean
}

const AuthContext = createContext<AuthContextProps>({})

function managerCookie(logado: boolean, token: string, tokenMaster: string) {
    // if (logado && token) {
    //     Cookies.set('session-auth', logado, {
    //         expires: 7
    //     })
    //     Cookies.set('session-auth-token', token, {
    //         expires: 7
    //     })
    //     Cookies.set('master-auth-token', tokenMaster, {
    //         expires: 7
    //     })
    // } else {
    //     Cookies.remove('session-auth-token')
    //     Cookies.remove('master-auth-token')
    //     Cookies.remove('session-auth')
    //     window.localStorage.removeItem('user')
    // }
}

export function AuthProvider(props) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [disabled, setDisabled] = useState(false)

    async function configSession(user: any, token: any, tokenMaster: any) {

        setUser(user)
        managerCookie(true, token, tokenMaster)
        setLoading(false)
        return user?.email

    }

    async function login(email: any, password: any) {


    }

    async function changePasswordAuth(password: any, reset_id: any) {


    }

    async function forgotPasswordAuth(email: any) {


    }

    async function logout() {
        try {
            setLoading(true)
            window.localStorage.removeItem('user')
            await configSession(null, null, null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('session-auth')) {
            const user = JSON.parse(window.localStorage.getItem('user'))
            configSession(user, Cookies.get('session-auth-token'), Cookies.get('master-auth-token'))
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            disabled,
            login,
            logout,
            changePasswordAuth,
            forgotPasswordAuth
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext


