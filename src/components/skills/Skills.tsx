import style from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title titleText={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, harum!'}/>
                    <Skill title={'JavaScript/TypeScript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa optio praesentium quis ullam unde voluptate! A fuga inventore laboriosam!'}
                    />
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos ex impedit libero recusandae tempore.'}
                    />
                </div>
            </div>
        </div>
    )
}