import style from './SkillTitle.module.scss'
import {useContext} from 'react';
import {ThemeContext} from '../../../context';

type TitlePropsType = {
    titleText: string
}

export const SkillTitle = ({titleText}: TitlePropsType) => {
    const {lightMode} =useContext(ThemeContext)
    return (
        <div className={style.sectionTitle}>
            <h5 className={lightMode ? style.light : ''}>{titleText}</h5>
            <span>{titleText}</span>
        </div>
    )
}