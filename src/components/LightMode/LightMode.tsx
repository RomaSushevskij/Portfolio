import style from './LightMode.module.scss'
import {faSun} from '@fortawesome/free-solid-svg-icons';
import styleModule from '../projects/project/Project.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {memo, useContext} from 'react';
import {ThemeContext} from '../../context';

type LightModePropsType = {
    changeLightMode: () => void
}
export const LightMode = memo(({changeLightMode}: LightModePropsType) => {
    const {lightMode} = useContext(ThemeContext)
    return (
        <div className={lightMode ?
            `${style.lightMode} ${style.light}` :
            style.lightMode}>
                <span className={style.icon}>
                    <FontAwesomeIcon icon={faSun}
                                     className={styleModule.linkIcon}/>
                    </span>
            <button className={lightMode ?
                `${style.lightModeSwitch} ${style.light}`
                : style.lightModeSwitch}
                    onClick={changeLightMode}>
            </button>
        </div>
    )
})