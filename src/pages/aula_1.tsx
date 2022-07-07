import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head'
import Menu from '../components/template/global/Menu'
import style from '../styles/home.module.css'
import useMyHook from '../core/hook/useMyHook';

export default function Page() {

    const {
        name,
        handleName,
    } = useMyHook()

    const [color, setColor] = useState<string>('')

    // CALLBACK
    useEffect(() => {
        myFunction('grey')
    }, [])

    // VOID
    const myFunction = (color: string) => {
        setColor(color)
    }

    // RETORNO
    const myName = (name) => {
        return (
            <div>
                Meu nome é {name}
            </div>
        )
    }

    return (
        <Fragment>

            <Head>
                <title>DevShowcase | Funções</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Menu />

            <div className={style.container}>

                <div>
                    <h1 className={style.title}>Aula 1 - Funções</h1>
                </div>

                <button className={style.button} onClick={() => myFunction('orange')}>Laranja</button>
                <button className={style.button} onClick={() => myFunction('green')}>Verde</button>
                <button className={style.button} onClick={() => myFunction('blue')}>Azul</button>

                <div className={style.divColor} style={{ background: color }}>

                </div>

                {myName(name)}

                <input placeholder="Digite seu nome" onChange={(event) => handleName(event)} />

            </div>


        </Fragment>
    )
}
