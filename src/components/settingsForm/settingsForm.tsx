import {Input} from "../input/input";
import {useState} from "react";
import {restoreState, saveState} from "../localStorage/localStorage";
import {Button} from "../Buttons/Button";
import s from './SettingsForm.module.css'

type SettingsFormType = {
    setCounter: (a: number) => void
}


export const SettingsForm = (props: SettingsFormType) => {
    const [minValue, setMinValue] = useState<string>('')
    const [maxValue, setMaxValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const saveMinValue = () => {
        saveState<string>('editable-span-minValue', minValue)
    }
    const saveMaxValue = () => {
        saveState<string>('editable-span-maxValue', maxValue)
    }

    /*const restore = () => {
        setValue(restoreState('editable-span-value',value ))
    }*/


    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(minValue)
            setMinValue('')
        }
    }
    const errorMessage = error
        ? <div style={{color: "white", backgroundColor: "red"}}>Title is required!</div>
        : null
    return (
        <div className={s.allBlock}>
            <div className={s.block}>
                <div className={s.text}>
                    maxValue:
                </div>
                <Input
                    value={minValue}
                    setValue={setMinValue}
                    onEnter={showAlert}
                    error={error}
                    //maxValue={restore}
                />
            </div>
            <div className={s.block}>
                <div className={s.text}>
                    startValue:
                </div>

                <Input
                    value={maxValue}
                    setValue={setMaxValue}
                    onEnter={showAlert}
                    error={error}
                    //startValue
                />
            </div>
            <div className={s.set}>
                <Button name={'set'} callBack={saveMinValue} disable={false}/>
            </div>
        </div>
    )
}