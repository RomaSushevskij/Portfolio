import style from './Projects.module.scss'
import {Project} from "./project/Project";
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/Title/Title";
import {ProjectType} from "../../App";
import {memo} from 'react';

type ProjectsPropsType = {
    projectsData: ProjectType[]
}


export const Projects = memo(({projectsData}: ProjectsPropsType) => {
    const projects = projectsData.map(pr => {
        const {id, title, description, style, demoLink, codeLink} = pr;
        return (
            <Project key={id}
                     title={title}
                     description={description}
                     style={style}
                     demoLink={demoLink}
                     codeLink={codeLink}/>
        )
    })
    return (
        <div className={style.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title titleText={'Projects'}/>
                <div className={style.projects}>
                    {projects}
                </div>
            </div>
        </div>
    )
})