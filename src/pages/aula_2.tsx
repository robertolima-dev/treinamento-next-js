import { Fragment } from 'react';
import Head from 'next/head'
import Menu from '../components/template/global/Menu'
import style from '../styles/home.module.css'
import { Select, Checkbox, Switch } from 'antd';
import useMyHook from '../core/hook/useMyHook';

export default function Page() {

    const {
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
    } = useMyHook()

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

                <div>
                    {name}
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
