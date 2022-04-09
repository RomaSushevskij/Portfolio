import style from './InputField.module.scss'
import {ChangeEvent, useState} from 'react';

type InputFieldPropsType = {
    value?:string
    label?:string
    id?:string
}

export const InputField = ({value,label, id}:InputFieldPropsType) => {
    const [inputValue, setInputValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    return (
        <div className={style.inputWrapper}>
            <label htmlFor={id}>{label}</label>
            <input type='text'
                   name='name'
                   id={id}
                   value={inputValue}
                   onChange={onChangeHandler}/>
        </div>
    )
}