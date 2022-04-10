import style from './Title.module.scss'
import {useContext} from 'react';
import {ThemeContext} from '../../../context';

type TitlePropsType = {
    titleText: string
}

export const Title = ({titleText}: TitlePropsType) => {
    const {lightMode} = useContext(ThemeContext)
    return (
        <div className={style.sectionTitle}>
            <h2 className={lightMode ? style.light : ''}>{titleText}</h2>
            <span className={lightMode ? style.light : ''}>{titleText}</span>
        </div>
    )
}