import styleModule from './Project.module.scss'
import styleContainer from '../../common/styles/Container.module.css'

type ProjectPropsType = {
    title: string
    description: string
    style?: { backgroundImage: string }
}

export const Project = ({title, description, style}: ProjectPropsType) => {
    return (
        <div className={styleModule.projectBlock}>
            <div className={styleModule.imgContainer} style={style}></div>
            <h5 className={styleModule.title}>{title}</h5>
            <h6 className={styleModule.description}>{description}</h6>
        </div>
    )
}