import style from './SkillTitle.module.scss'
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../context';

type TitlePropsType = {
    titleText: string
}

export const SkillTitle = memo(({titleText}: TitlePropsType) => {
    const {lightMode} = useContext(ThemeContext)
    return (
        <div className={style.sectionTitle}>
            <h5 className={lightMode ? style.light : ''}>{titleText}</h5>
            <span></span>
        </div>
    )
})