import style from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Avatar} from '../../common/components/Avatar/Avatar';
import {AvatarSettingsType} from '../../App';
import {SocialIcon} from '../../common/components/SocialIcon/SocialIcon';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {Particle} from './Particle/Particle';
import {useContext} from 'react';
import {ThemeContext} from '../../context';

type MainPropsType = {
    avatarSettings: AvatarSettingsType
    socialIconsData: { name: IconProp, href: string }[]
}

export const Main = ({
                         avatarSettings,
                         socialIconsData
                     }: MainPropsType) => {
    const {lightMode} = useContext(ThemeContext)
    const socialIcons = socialIconsData.map((el, i) => {
        return (
            <SocialIcon
                key={i}
                socialIconName={el.name}
                href={el.href}/>
        )
    })
    return (
        <div className={style.mainBlock} id={'home'} >
            <Particle lightMode={lightMode}/>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Avatar style={avatarSettings}/>
                <div className={style.welcome}>
                    <h1 className={lightMode ? style.light : ''}>Hi, I am <span className={style.colorTheme}>Roman Suschevskij</span></h1>
                    <p>I am a frontend web developer with a specialization in development Web-interfaces, Landing pages and SPA. After working as a freelancer, I would like to join some ambitious team to expand my professional skills.
                    </p>
                    <div className={style.socialIconsBordered}>
                        {socialIcons}
                    </div>
                </div>
            </div>
        </div>
    )
}