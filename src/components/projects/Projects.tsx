import style from './Projects.module.scss'
import {Project} from "./project/Project";
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/Title/Title";
import {ProjectType} from "../../App";

type ProjectsPropsType = {
    projectsData: ProjectType[]
}


export const Projects = ({projectsData}: ProjectsPropsType) => {
    const projects = projectsData.map(pr => {
        const {id, title, description, style,} = pr;
        return (
            <Project key={id}
                     title={title}
                     description={description}
                     style={style}/>
        )
    })
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title titleText={'Projects'}/>
                <div className={style.projects}>
                    {projects}
                </div>
            </div>
        </div>
    )
}