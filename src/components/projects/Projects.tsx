import style from './Projects.module.css'
import {Project} from "./project/Project";
import styleContainer from "../../common/styles/Container.module.css";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={'Social network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur dolorum iste nemo sint? Nam!'}/>
                    <Project title={'To do list'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, repellendus!'}/>
                    <Project title={'Counter'} description={'Lorem ipsum dolor sit amet...'}/>
                </div>
            </div>
        </div>
    )
}