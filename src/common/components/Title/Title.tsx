import style from './Title.module.scss'
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../context';

type TitlePropsType = {
    titleText: string
}

export const Title = memo(({titleText}: TitlePropsType) => {
    const {lightMode} = useContext(ThemeContext)
    return (
        <div className={style.sectionTitle}>
            <h2 className={lightMode ? style.light : ''}>{titleText}</h2>
            <span className={lightMode ? style.light : ''}>{titleText}</span>
        </div>
    )
})