import style from './SkillTitle.module.scss'

type TitlePropsType = {
    titleText: string
}

export const SkillTitle = ({titleText}: TitlePropsType) => {
    return (
        <div className={style.sectionTitle}>
            <h5>{titleText}</h5>
            <span>{titleText}</span>
        </div>
    )
}