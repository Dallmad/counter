import React from "react";
import s from './Buttons.module.css'

type ButtonType = {
    name: string,
    callBack: () => void
    disable: boolean
}


export const Button = (props: ButtonType) => {
    return (
        <button
            className={props.disable ? s.noActive : s.button}
            disabled={props.disable}
            onClick={() => props.callBack()}>
            {props.name}
        </button>
    )
}
