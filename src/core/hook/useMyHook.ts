import { useState } from "react"
import useAuth from "./useAuth"
import { openNotification } from '../../utils/notification'
import { formatName } from '../../utils/formatString'

export default function useMyHook() {

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [total, setTotal] = useState(0)
    const [productId, setProductId] = useState(null)

    const [products] = useState([
        { id: 1, product: 'Televisao' },
        { id: 2, product: 'Celular' },
        { id: 3, product: 'Radio' },
        { id: 4, product: 'Maquina de lavar' },
        { id: 5, product: 'Geladeira' },
        { id: 6, product: 'Mesa' },
        { id: 7, product: 'Cadeira' },
        { id: 8, product: 'Notebook' },
        { id: 9, product: 'Monitor' },
        { id: 10, product: 'Luminaria' },
    ])

    const handleName = (event) => {
        const nameFormated = formatName(event.target.value)
        setName(nameFormated)
        if (event.target.value.length > 3) {
            console.log(`chamar filtro na api - qtd chamadas ${event.target.value.length}`)
        }
    }

    const handleText = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
        setTotal(event.target.value.length)
        if (event.target.value.length === 254) {
            alert('Limite excedido')
        }
    }

    const handleSelect = (event) => {
        console.log(event.target.value)
        setProductId(event.target.value)
    }

    const handleSelectAntd = (value) => {
        console.log(value)
    }

    const handleCheckbox = (event) => {
        console.log(event.target.checked)

    }

    const handleSwitch = (checked) => {
        console.log(checked)
    }

    return {
        name,
        text,
        total,
        products,
        handleName,
        handleText,
        handleSelect,
        handleSelectAntd,
        handleCheckbox,
        handleSwitch,
    }
}