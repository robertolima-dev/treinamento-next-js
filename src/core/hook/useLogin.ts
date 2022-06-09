import { useState } from "react"
import useAuth from "./useAuth"
import { openNotification } from '../../utils/notification'

export default function useLogin() {

    const {
        login,
        changePasswordAuth,
        forgotPasswordAuth
    } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [reset_id, setResetId] = useState(null)
    const [visible, setVisible] = useState(false)

    const forgotPassword = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false);
    };

    const loginUser = async () => {
        await login(email, password)
    }

    const changePassword = async () => {
        if (password === confirm_password) {
            if (password && (!password.replace(/\D/g, '') || !password.replace(/\d/g, '') || !password.replace(/\w/g, '') || password.length < 8)) {
                openNotification('Senha fraca', 'Sua senha deve ser composta por no mínimo 8 caracteres e incluir ao menos uma letra, um número e um caractere especial.', 'warning')
            } else {
                await changePasswordAuth(password, reset_id)
            }
        } else {
            openNotification('As senhas não são iguais', 'As senhas precisam ser identicas para poder alterar!', 'warning')
        }
    }

    const handleEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e: any) => {
        setConfirmPassword(e.target.value)
    }

    const forgotMyPassword = async () => {
        await forgotPasswordAuth(email)
        setVisible(false)
    }

    return {
        email,
        password,
        reset_id,
        setEmail,
        setPassword,
        setConfirmPassword,
        setResetId,
        handleConfirmPassword,
        loginUser,
        handleEmail,
        handlePassword,
        changePassword,
        forgotMyPassword,
        visible,
        forgotPassword,
        handleCancel,
    }
}