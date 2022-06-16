import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head'
import Menu from '../components/template/global/Menu'
import style from '../styles/home.module.css'
import { Select, Checkbox, Switch } from 'antd';

export default function Page() {

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
        setName(event.target.value)
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

    const getMyProductName = (item) => {
        if (item.id === Number(productId)) return <b>{item.product}</b>
        else {
            return item.product
        }
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

    const { Option } = Select
    return (
        <Fragment>

            <Head>
                <title>DevShowcase | Inputs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Menu />

            <div className={style.container}>

                <div>
                    <h1 className={style.title}>Aula 2 - Inputs e eventos</h1>
                </div>

                <div style={{ marginTop: '12px' }}>
                    <input onChange={(event) => handleName(event)} placeholder="Escreva seu nome" />
                </div>

                <div style={{ marginTop: '12px' }}>
                    <textarea onChange={(event) => handleText(event)} rows={6} placeholder="Descreva seu curriculum" maxLength={254}>
                        {text}
                    </textarea>
                </div>
                {/* contador  */}
                <div>
                    {254 - total}
                </div>
                <div>
                    {total} / 254
                </div>

                <div style={{ marginTop: '12px' }}>
                    <select onChange={(event) => handleSelect(event)}>
                        {products.map((item, index) =>
                            <option key={index} value={item.id}>{item.product}</option>
                        )}
                    </select>
                </div>

                <div style={{ marginTop: '12px' }}>
                    <Select onChange={handleSelectAntd} style={{ width: '200px' }}>
                        {products.map((item, index) =>
                            <Option key={index} value={item.id}>{item.product}</Option>
                        )}
                    </Select>
                </div>

                <div>
                    <Checkbox onChange={handleCheckbox}>Checkbox</Checkbox>
                </div>

                <div>
                    <Switch disabled defaultChecked onChange={handleSwitch} />
                </div>

                {/* {products.map((item, index) =>
                    <div>
                        {getMyProductName(item)}
                    </div>

                )} */}

            </div>


        </Fragment>
    )
}
