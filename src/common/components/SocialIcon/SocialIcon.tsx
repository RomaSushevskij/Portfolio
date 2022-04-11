import style from './SocialIcon.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../context';


type SocialIconPropsType = {
    socialIconName: IconProp
    href: string
}

export const SocialIcon = memo(({socialIconName, href}: SocialIconPropsType) => {
    const {lightMode} = useContext(ThemeContext)

    return (
        <a href={href}
           target={'_blank'}
           className={lightMode ?
               `${style.socialIconWrapper} ${style.light}` :
               style.socialIconWrapper}>
            <FontAwesomeIcon icon={socialIconName}
                             className={style.icon}/>
        </a>
    )
})