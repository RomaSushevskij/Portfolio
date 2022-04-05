import style from './Skill.module.css'
import styleContainer from '../../common/styles/Container.module.css'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}