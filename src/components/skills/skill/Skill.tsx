import style from './Skill.module.scss'
import {SkillTitle} from "../../../common/components/SkillTitle/SkillTitle";
import {useContext} from 'react';
import {ThemeContext} from '../../../context';

type SkillPropsType = {
    title: string
    description: string
    icon?: any
}

export const Skill = ({title, description,icon}: SkillPropsType) => {
    const {lightMode} =useContext(ThemeContext)
    return (
        <div className={lightMode ? `${style.skillBlock} ${style.light}` : style.skillBlock}>
            <div className={style.icon}>{icon}</div>
            <SkillTitle titleText={title}/>
            <p className={style.description}>{description}</p>
        </div>
    )
}