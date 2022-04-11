import style from './Toggle.module.scss'
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../context';

type TogglePropsType = {
    editMode: boolean
    setToggle: () => void
}

export const Toggle = memo(({setToggle, editMode}: TogglePropsType) => {
    const {lightMode} = useContext(ThemeContext)
    const isEditModeClassName = editMode ? style.toggleOn : ''
    const finalNavClassName = lightMode ? `${isEditModeClassName} ${style.light}` : isEditModeClassName
    return (
        <button className={lightMode ? `${style.toggle} ${style.light}` : style.toggle}
                onClick={setToggle}>
            <i className={finalNavClassName}></i>
        </button>
    )
})
