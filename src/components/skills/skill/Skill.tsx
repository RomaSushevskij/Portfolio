import style from './Skill.module.scss'
import {SkillTitle} from "../../../common/components/SkillTitle/SkillTitle";

type SkillPropsType = {
    title: string
    description: string
    icon?: any
}

export const Skill = ({title, description,icon}: SkillPropsType) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>{icon}</div>
            <SkillTitle titleText={title}/>
            <p className={style.description}>{description}</p>
        </div>
    )
}