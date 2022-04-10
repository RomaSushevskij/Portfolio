import style from './InputField.module.scss'
import {ChangeEvent, useContext, useState} from 'react';
import {ThemeContext} from '../../../context';

type InputFieldPropsType = {
    value?: string
    label?: string
    id?: string
}

export const InputField = ({value, label, id}: InputFieldPropsType) => {
    const [inputValue, setInputValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const {lightMode} = useContext(ThemeContext)
    return (
        <div className={style.inputWrapper}>
            <label className={lightMode ? style.light : ''} htmlFor={id}>{label}</label>
            <input className={lightMode ? style.lightInput : ''}
                   type='text'
                   name='name'
                   id={id}
                   value={inputValue}
                   onChange={onChangeHandler}/>
        </div>
    )
}