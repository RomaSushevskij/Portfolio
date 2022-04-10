import style from './TextareaField.module.scss'
import {ChangeEvent, useContext, useState} from 'react';
import {ThemeContext} from '../../../context';

type TextareaFieldPropsType = {
    value?: string
    label?: string
    id?: string
}

export const TextareaField: React.FC<TextareaFieldPropsType> = ({value, label, id, children}) => {
    const [textareaValue, setTextareaValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(e.currentTarget.value)
    }
    const {lightMode} = useContext(ThemeContext)
    return (
        <div className={style.textareaWrapper}>
            <label className={lightMode ? style.light : ''} htmlFor={id}>{label}</label>
            <textarea className={lightMode ? style.lightTextarea : ''}
                      style={{width: '100%', height: '200px'}} name='name'
                      id={id}
                      value={textareaValue}
                      onChange={onChangeHandler}>
            </textarea>
        </div>
    )
}