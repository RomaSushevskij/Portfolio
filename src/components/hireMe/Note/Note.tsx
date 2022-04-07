import style from './Note.module.scss'

type NotePropsType = {
    innerText: string
}

export const Note = ({innerText}: NotePropsType) => {
    return (
        <div className={style.noteContent}>
            <p>{innerText}</p>
        </div>
    )
}