import style from './TextareaField.module.scss'
import {ChangeEvent, memo, useContext, useState} from 'react';
import {ThemeContext} from '../../../context';

type TextareaFieldPropsType = {
    value?: string
    label?: string
    id?: string
    onChange?: (value: string) => void
    name?: string
}

export const TextareaField: React.FC<TextareaFieldPropsType> = memo(({
                                                                         value,
                                                                         label,
                                                                         id,
                                                                         onChange, name,
                                                                         children
                                                                     }) => {
    const [textareaValue, setTextareaValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(e.currentTarget.value)
    }
    const {lightMode} = useContext(ThemeContext)
    return (
        <div className={style.textareaWrapper}>
            <label className={lightMode ? style.light : ''} htmlFor={id}>{label}</label>
            <textarea className={lightMode ? style.lightTextarea : ''}
                      style={{width: '100%', height: '200px'}}
                      name={name}
                      id={id}
                      value={value}
                      onChange={onChangeHandler}
                      >
            </textarea>
        </div>
    )
})