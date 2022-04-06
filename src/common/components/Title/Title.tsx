import style from './Title.module.scss'

type TitlePropsType = {
    titleText: string
}

export const Title = ({titleText}: TitlePropsType) => {
    return (
        <div className={style.sectionTitle}>
            <h2>{titleText}</h2>
            <span>{titleText}</span>
        </div>
    )
}