import style from './TextareaField.module.scss'
import {ChangeEvent, FC, useState} from 'react';

type TextareaFieldPropsType = {
    value?: string
    label?: string
    id?: string
}

export const TextareaField:React.FC<TextareaFieldPropsType> = ({value, label, id, children }) => {
    const [textareaValue, setTextareaValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(e.currentTarget.value)
    }
    return (
        <div className={style.textareaWrapper}>
            <label htmlFor={id}>{label}</label>
            <textarea style={{width: '100%', height: '200px'}} name='name'
                      id={id}
                      value={textareaValue}
                      onChange={onChangeHandler}>
            </textarea>
        </div>
    )
}