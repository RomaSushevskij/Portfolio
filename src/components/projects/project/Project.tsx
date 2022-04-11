import styleModule from './Project.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faEye} from '@fortawesome/free-solid-svg-icons';
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../context';

type ProjectPropsType = {
    title: string
    description: string
    style?: { backgroundImage: string }
    demoLink: string
    codeLink: string
}

export const Project = memo(({
                                 title,
                                 description,
                                 style,
                                 demoLink, codeLink
                             }: ProjectPropsType) => {
    const {lightMode} = useContext(ThemeContext)
    return (
        <div className={styleModule.projectBlock}>
            <div className={styleModule.imgContainer} style={style}>
                <ul className={styleModule.link}>
                    <li>
                        <a className={lightMode ? styleModule.light : ''} href={demoLink} target={'_black'}>
                            <FontAwesomeIcon icon={faEye}/>
                        </a>
                    </li>
                    <li>
                        <a className={lightMode ? styleModule.light : ''} href={codeLink} target={'_black'}>
                            <FontAwesomeIcon icon={faCode}/>

                        </a>
                    </li>
                </ul>
            </div>
            <h5 className={lightMode ? `${styleModule.title} ${styleModule.light}` : styleModule.title}>{title}</h5>
            <h6 className={lightMode ? `${styleModule.description} ${styleModule.light}` : styleModule.description}>{description}</h6>
        </div>
    )
})