import React, { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Head from 'next/head'
import Menu from '../components/template/global/Menu'
import style from '../styles/home.module.css'
import { Button, Form, Input } from 'antd';
import { TextField, Checkbox } from "@material-ui/core";
import InputHookForm from '../components/template/global/InputHookForm'
import { formatName } from '../utils/formatString'
import useMyHook from "../core/hook/useMyHook";

export default function App() {

    const {
        name,
        handleName,
    } = useMyHook()

    return (
        <Fragment>

            <Head>
                <title>DevShowcase | Formulários</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Menu />

            <div className={style.container}>

                <div>
                    <h1 className={style.title}>Aula 4 - Clean Code</h1>
                </div>

                <input onChange={(e) => handleName(e)} />

                <div>
                    {name}
                </div>
            </div>


        </Fragment>
    );
}