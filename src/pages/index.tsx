import { Fragment } from 'react';
import Head from 'next/head'
import Menu from '../components/template/global/Menu'
import style from '../styles/home.module.css'

export default function Page() {

    return (
        <Fragment>

            <Head>
                <title>DevShowcase | Projeto prático</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Menu />

            <div>
                <h1 className={style.title}>Projeto prático</h1>
            </div>

        </Fragment>
    )
}
