import style from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Avatar} from '../../common/components/Avatar/Avatar';
import avatarLogo from '../../assets/avatar/avatar.jpg'
import {AvatarSettingsType} from '../../App';

type MainPropsType = {
    avatarSettings:AvatarSettingsType
}

export const Main = ({avatarSettings}:MainPropsType) => {

    return (
        <div className={style.mainBlock} id={'home'}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Avatar style={avatarSettings}/>
                <div className={style.welcome}>
                    <h1>Hi, I am <span className={style.colorTheme}>Roman Suschevskij</span></h1>
                    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make
                        website more & more interactive with web animations.</p>
                </div>
            </div>
        </div>
    )
}