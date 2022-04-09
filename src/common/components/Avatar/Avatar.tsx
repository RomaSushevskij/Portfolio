import styleModule from './Avatar.module.scss'
import {AvatarSettingsType} from '../../../App';

type AvatarPropsType = {
    style:AvatarSettingsType
}

export const Avatar = ({style}:AvatarPropsType) => {
    return (
        <div style={style} className={styleModule.avatarWrapper}></div>
    )
}