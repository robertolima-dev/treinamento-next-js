import { Fragment } from 'react';
import Link from 'next/link'
import style from '../../../styles/home.module.css'
import { useForm } from "react-hook-form";

interface InputProps {
    inputName: string
    inputLabel: string
    require?: boolean
    maxLength?: number
    register: any
}

export default function Page(props: InputProps, { register }) {

    // const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <input {...register(props.inputName)} placeholder={props.inputLabel} />
    )
}
