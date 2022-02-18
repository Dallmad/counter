import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react';
import s from './Input.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputType = DefaultInputPropsType & {
    value: string,
    setValue: (title: string) => void
    onEnter: () => void
    error: boolean
    maxValue?: (a: number) => void
}

export const Input: React.FC<InputType> = (
    {
        type,
        onChange, setValue, value,
        onKeyPress, onEnter,
        error,
        className, maxValue,
        ...restProps
    }) => {


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        setValue && setValue(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }


    return (

            <input
                className={s.main}
                type={"number"}
                step='1'
                min='0'
                max=''
                value={value}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
            />

    )

}
