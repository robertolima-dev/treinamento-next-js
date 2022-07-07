import { Fragment } from 'react';
import Link from 'next/link'
import style from '../../../styles/home.module.css'

export default function Page() {

    return (
        <Fragment>

            <div className={style.menu_area}>
                <div className={style.menu_link}>
                    <Link href={'/'}>Home</Link>
                </div>
                <div className={style.menu_link}>
                    <Link href={'/aula_1'}>Aula 1</Link>
                </div>
                <div className={style.menu_link}>
                    <Link href={'/aula_2'}>Aula 2</Link>
                </div>
                <div className={style.menu_link}>
                    <Link href={'/aula_3'}>Aula 3</Link>
                </div>
                <div className={style.menu_link}>
                    <Link href={'/aula_4'}>Aula 4</Link>
                </div>
            </div>

        </Fragment>
    )
}
