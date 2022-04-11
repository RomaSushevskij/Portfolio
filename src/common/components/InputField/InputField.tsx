import style from './InputField.module.scss'
import {ChangeEvent, memo, useContext, useState} from 'react';
import {ThemeContext} from '../../../context';

type InputFieldPropsType = {
    value?: string
    label?: string
    id?: string
    onChange?: (value: string) => void
    name?: string
}

export const InputField = memo(({
                                    value,
                                    label,
                                    id,
                                    onChange,
                                    name,
                                }: InputFieldPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value)
    }
    const {lightMode} = useContext(ThemeContext)
    return (
        <div className={style.inputWrapper}>
            <label className={lightMode ? style.light : ''} htmlFor={id}>{label}</label>
            <input className={lightMode ? style.lightInput : ''}
                   type='text'
                   name={name}
                   id={id}
                   value={value}
                   onChange={onChangeHandler}/>
        </div>
    )
})