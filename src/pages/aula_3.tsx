import React, { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Head from 'next/head'
import Menu from '../components/template/global/Menu'
import style from '../styles/home.module.css'
import { Button, Form, Input } from 'antd';

export default function App() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // hook form
    const onSubmit = data => {
        console.log('hook forms:', data)
    };

    // antd 
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Fragment>

            <Head>
                <title>DevShowcase | Formulários</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Menu />

            <div className={style.container}>

                <div>
                    <h1 className={style.title}>Aula 3 - Formulários</h1>
                </div>

                <div style={{ marginTop: '28px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ marginTop: '12px' }}>
                            <input {...register('name')} placeholder={'Nome'} />
                            <div style={{ color: 'red', fontSize: '1.3rem' }}>
                                {errors.name?.type === 'required' && "First name is required"}
                            </div>
                        </div>

                        <div style={{ marginTop: '12px' }}>
                            <input {...register('email')} placeholder={'Email'} />
                        </div>

                        <div style={{ marginTop: '12px' }}>
                            <input {...register('password')} placeholder={'Senha'} />
                        </div>

                        {/* <Controller
                            name="checkbox"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Checkbox {...field} />}
                        /> */}

                        <div style={{ marginTop: '12px' }}>
                            <input type="submit" />
                        </div>
                    </form>
                </div>

                <hr />

                <div style={{ marginTop: '28px' }}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Nome"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>


        </Fragment>
    );
}