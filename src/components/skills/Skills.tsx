import style from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/Title/Title";
import {HTMLIcon, ReactIcon} from '../../common/components/TechnologyIcons/TechnologyIcons';
import {SkillType} from '../../App';

export type SkillsPropsType = {
    skillsData: SkillType[]
}
export const Skills = ({skillsData}: SkillsPropsType) => {

    const skillItems = skillsData.map(skill => {
        const {id, title, description, icon} = skill
        return (
            <Skill key={id}
                   title={title}
                   description={description}
                   icon={icon}/>
        )
    })
    return (
        <div className={style.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title titleText={'Skills'}/>
                <div className={style.skills}>
                    {skillItems}
                </div>
            </div>
        </div>
    )
}