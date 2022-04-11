import style from './Note.module.scss'
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../context';

type NotePropsType = {
    innerText: string
}

export const Note = memo(({innerText}: NotePropsType) => {
    const {lightMode} = useContext(ThemeContext)
    return (

        <div className={lightMode ? `${style.noteContent} ${style.light}` : style.noteContent}>
            <p>{innerText}</p>
        </div>
    )
})