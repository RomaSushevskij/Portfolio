import style from './Projects.module.scss'
import {Project} from "./project/Project";
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/Title/Title";
import {ProjectType} from "../../App";

type ProjectsPropsType = {
    projectsData:ProjectType[]
}


export const Projects = ({projectsData}:ProjectsPropsType) => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title titleText={'Projects'}/>
                <div className={style.projects}>
                    <Project title={projectsData[0].title}
                             description={projectsData[0].description}
                    style={projectsData[0].style}/>
                    <Project title={'To do list'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, repellendus!'}/>
                    <Project title={'Counter'} description={'Lorem ipsum dolor sit amet...'}/>
                </div>
            </div>
        </div>
    )
}