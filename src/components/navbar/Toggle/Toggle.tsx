import style from './Toggle.module.scss'
import {useState} from 'react';

type TogglePropsType = {
    editMode:boolean
    setToggle: () => void
}

export const Toggle = ({setToggle,editMode}: TogglePropsType) => {
    return (
        <button className={style.toggle}
                onClick={setToggle}>
            <i className={editMode ? style.toggleOn : ''}></i>
        </button>
    )
}
